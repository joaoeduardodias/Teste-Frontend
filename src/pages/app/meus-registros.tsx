import { useState } from 'react'

import {
  ApolloClient,
  createHttpLink,
  gql,
  // eslint-disable-next-line prettier/prettier
  InMemoryCache,
} from '@apollo/client'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import nookies, { parseCookies } from 'nookies'

import { ListRegisters } from '../../components/app/ListRegisters'
import { ModalNewRegister } from '../../components/app/ModalNewRegister'
import { SideBar } from '../../components/app/SideBar'
import { useCreateRegisteredTimeMutation } from '../../graphql/generated/graphql'
import { client } from '../../lib/apollo'

interface RegisteredTimes {
  id: string
  created_at: string
  user: {
    name: string
    id: string
  }
}

interface MyRegistersProps {
  registeredTimes: RegisteredTimes[]
  myId: string
}

function MyRegisters({ myId, registeredTimes }: MyRegistersProps) {
  const { 'nextAuth.token': token } = parseCookies()

  const [currentPage, setCurrentPage] = useState(1)
  const [times, setTimes] = useState(registeredTimes)

  const indexOfLastTime = currentPage * 9
  const indexOfFirstTime = indexOfLastTime - 9
  const reversedTimes = [...times].reverse()
  const currentTimes = reversedTimes.slice(indexOfFirstTime, indexOfLastTime)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const [registerTime] = useCreateRegisteredTimeMutation()

  const { onOpen, isOpen, onClose } = useDisclosure() // open modal create new register

  async function handleCreateNewRegisteredTime() {
    try {
      await registerTime({
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        variables: {
          id: myId,
        },
      })

      const { data } = await client.query({
        query: gql`
          query GetMyRegisteredTimes($id: String!) {
            registeredTimes(where: { user: { id: $id } }) {
              user: user {
                name
                id
              }
              created_at
              id
            }
          }
        `,
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        variables: {
          id: myId,
        },
      })

      const { registeredTimes } = data

      setTimes(registeredTimes)

      onClose()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>PontoGo | Meus registros</title>
      </Head>

      <Flex w="100%" minH="100vh" bg="#F2F2F2" flex={2}>
        <SideBar />
        <Flex align="start" w="100%" p="10" direction="column">
          <Button
            size="lg"
            bg="purple.700"
            color="white"
            w="12.5rem"
            fontWeight="400"
            _hover={{ bg: 'purple.800' }}
            onClick={onOpen}
          >
            Registrar ponto
          </Button>
          <ModalNewRegister
            isOpen={isOpen}
            onClose={onClose}
            onTime={handleCreateNewRegisteredTime}
          />
          <ListRegisters
            registeredTimes={currentTimes}
            currentPage={currentPage}
            paginate={paginate}
            timesPerPage={9}
            totalTimes={times.length}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default MyRegisters

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'nextAuth.token': token } = nookies.get(ctx)

  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://test.frontend.api.brainny.cc/graphql',
      headers: {
        cookie: token,
      },
    }),
    cache: new InMemoryCache(),
  })

  try {
    const { data: myData } = await client.query({
      query: gql`
        query GetMe {
          me {
            id
          }
        }
      `,
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })

    const myId = myData.me.id

    const { data } = await client.query({
      query: gql`
        query GetMyRegisteredTimes($id: String!) {
          registeredTimes(where: { user: { id: $id } }) {
            user: user {
              name
              id
            }
            created_at
            id
          }
        }
      `,
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      variables: {
        id: myData.me.id,
      },
    })

    const { registeredTimes } = data

    return {
      props: {
        registeredTimes,
        myId,
      },
    }
  } catch (error) {
    nookies.destroy(ctx, 'nextAuth.token')

    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}
