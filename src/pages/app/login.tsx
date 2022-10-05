import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Login: NextPage = () => (
  <Flex
    w="100%"
    h="100vh"
    bg="white"
    align="center"
    justify="center"
    color="black"
  >
    <Flex direction="column" align="center" justify="center">
      <Image src="/app/illustration.svg" />
      <Heading>Bem vindo ao PontoGo</Heading>
      <Text>Aqui você fará toda gestão do seu sistema de pontos.</Text>
    </Flex>
    <Flex>
      <Image src="/app/logoCor.svg" />
      <Heading>Faça login</Heading>
    </Flex>
  </Flex>
)

export default Login
