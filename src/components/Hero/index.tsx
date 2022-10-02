import { Button, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'

export function Hero(): JSX.Element {
  return (
    <Flex
      as="section"
      mt="148px"
      w="90%"
      maxW="1140px"
      mx="auto"
      position="relative"
    >
      <Flex direction="column" maxW="520px">
        <Text
          as="p"
          textTransform="uppercase"
          fontWeight="300"
          letterSpacing="16.5%"
        >
          Esquece o ponto manual
        </Text>
        <Heading fontWeight="800" fontSize="40px" lineHeight="60px">
          Chegou a nova realidade para{' '}
          <Text display="inline" color="purple.400">
            Controle de Pontos
          </Text>
        </Heading>
        <Text as="p" w="476px" fontSize="18px" lineHeight="27px">
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>

        <HStack spacing="15px" mt="30px">
          <Button w="160px" h="50px" colorScheme="purple" fontWeight="500">
            Assinar agora
          </Button>
          <Button
            w="160px"
            h="50px"
            colorScheme="whiteAlpha"
            borderColor="white"
            color="white"
            variant="outline"
          >
            Ver planos
          </Button>
        </HStack>
      </Flex>
      <Flex position="absolute" right="0" top="-20">
        <Image
          src="./illustration.svg"
          alt="Homem com óculos de realidade virtual perto de um ícone de foguete,
         um notebook e um calendário"
        />
      </Flex>
    </Flex>
  )
}
