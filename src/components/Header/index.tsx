import { Button, Flex, Image, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header(): JSX.Element {
  return (
    <Flex
      w="90%"
      maxW="1140px"
      mx="auto"
      pt="45px"
      zIndex="20"
      // h="5rem"
      align="center"
      justifyContent="space-between"
    >
      <Image src="./logoWhite.svg" alt="Logo PontoGo" w="164px" h="38.15px" />
      <Flex align="center" justifyContent="space-between" w="261px" h="100%">
        <Link href="/" passHref>
          <ChakraLink>
            <Text>Início</Text>
          </ChakraLink>
        </Link>
        <Link href="#plans" passHref>
          <ChakraLink>
            <Text>Planos</Text>
          </ChakraLink>
        </Link>
        <Button bg="white" color="purple.700" fontWeight="normal">
          <Link href="/signIn" passHref>
            Fazer login
          </Link>
        </Button>
      </Flex>
    </Flex>
  )
}
