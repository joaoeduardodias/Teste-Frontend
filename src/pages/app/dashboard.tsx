import { useState } from 'react'

import {
  ApolloClient,
  createHttpLink,
  gql,
  // eslint-disable-next-line prettier/prettier
  InMemoryCache
} from '@apollo/client'
import { Flex } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import nookies from 'nookies'

import { ListRegisters } from '../../components/app/ListRegisters'
import { SideBar } from '../../components/app/SideBar'

interface RegisteredTimes {
  id: string
  created_at: string
  user: {
    name: string
    id: string
  }
}

interface DashboardProps {
  registeredTimes: RegisteredTimes[]
}

function Dashboard({ registeredTimes }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [times] = useState(registeredTimes)

  const indexOfLastTime = currentPage * 9
  const indexOfFirstTime = indexOfLastTime - 9
  const reversedTimes = [...times].reverse()
  const currentTimes = reversedTimes.slice(indexOfFirstTime, indexOfLastTime)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Flex w="100%" minH="100vh" bg="#F2F2F2" flex={2}>
      <SideBar />
      <Flex align="start" w="100%" p="10" direction="column">
        <ListRegisters
          registeredTimes={currentTimes}
          currentPage={currentPage}
          paginate={paginate}
          timesPerPage={4}
          totalTimes={times.length}
        />
      </Flex>
    </Flex>
  )
}
export default Dashboard

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
    const { data } = await client.query({
      query: gql`
        query GetRegisteredTimes {
          registeredTimes {
            id
            created_at
            user: user {
              name
              id
            }
          }
        }
      `,
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })

    const { registeredTimes } = data

    return {
      props: {
        registeredTimes,
      },
    }
  } catch (error) {
    nookies.destroy(ctx, 'nextAuth.token')

    return {
      redirect: {
        permanent: false,
        destination: '/app/login',
      },
    }
  }
}
