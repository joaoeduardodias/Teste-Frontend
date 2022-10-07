import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  // eslint-disable-next-line prettier/prettier
  Text
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { FormSignIn } from '../../components/app/FormSignIn'

const Login: NextPage = () => (
  <>
    <Head>
      <title>PontoGo | Login</title>
    </Head>

    <Flex w="100%" h="100vh" bg="white" color="black" overflow="hidden">
      <Grid
        h="100%"
        w="100%"
        maxW="1140px"
        mx="auto"
        bg="#ffffffb2"
        backdropFilter="auto"
        backdropBlur="25px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem
          w="100%"
          h="100%"
          backdropFilter="auto"
          backdropBlur="250px"
          bgGradient="radial(13rem 21rem at 50% 48%,
          #8A53FFCC,#9769F9AB, #A17BF490, #996DF85E, #8A53FF00 )"
        >
          <Flex
            bg="#ffffffb2"
            backdropFilter="auto"
            backdropBlur="25px"
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
          >
            <Image
              src="/app/illustration.svg"
              w={['60%']}
              h={['50%', '50%', '50%', '50%', '50%', '30%']}
            />
            <Heading
              as="h1"
              fontWeight="700"
              color="purple.700"
              fontSize="2.5rem"
              mt="1.25rem"
            >
              Bem vindo ao PontoGo
            </Heading>
            <Text
              maxW="23.81rem"
              fontSize="1.56rem"
              textAlign="center"
              color="purple.700"
              fontWeight="400"
              lineHeight="2.25rem"
              mt=".625rem"
            >
              Aqui você fará toda gestão do seu sistema de pontos.
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          display="flex"
          w="100%"
          h="100%"
          flexDirection="column"
          alignItems="center"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            h="100%"
          >
            <Flex align="start" direction="column">
              <Image src="/app/logoCor.svg" w="20.18rem" />
              <FormSignIn />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  </>
)

export default Login
