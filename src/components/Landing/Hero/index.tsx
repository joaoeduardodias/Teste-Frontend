import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  // eslint-disable-next-line prettier/prettier
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'

export function Hero(): JSX.Element {
  const showImageIllustration = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex
      as="section"
      mt="148px"
      w="90%"
      h={['auto', 'auto', 'auto', '23.68rem', '31.68rem']}
      maxW="1140px"
      mx="auto"
      overflow="hidden"
      gap={['0', '0', '0', '0', '3rem']}
    >
      <Flex
        direction="column"
        maxW={['100%', '100%', '100%', '520px', '520px']}
        h="100%"
        justify="center"
        align={['center', 'center', 'center', 'initial', 'initial']}
        textAlign={['center', 'center', 'center', 'initial', 'initial']}
      >
        <Text
          as="p"
          textTransform="uppercase"
          fontWeight="300"
          letterSpacing="16.5%"
          fontSize={['0.8rem', '1rem', '1.5rem']}
        >
          Esquece o ponto manual
        </Text>
        <Heading
          fontWeight="800"
          fontSize={['2.3rem', '2.3rem', '2.5rem']}
          lineHeight="60px"
        >
          Chegou a nova realidade para{' '}
          <Text display="inline" color="purple.400">
            Controle de Pontos
          </Text>
        </Heading>
        <Text
          as="p"
          maxW="476px"
          fontSize={['1rem', '1.125rem']}
          lineHeight="27px"
        >
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>

        <Stack spacing="15px" mt="30px" direction={['column', 'column', 'row']}>
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
            <Link href="#plans" passHref>
              Ver planos
            </Link>
          </Button>
        </Stack>
      </Flex>

      {showImageIllustration && (
        <Image
          w="50%"
          objectFit="cover"
          src="./illustration.svg"
          alt="Homem com óculos de realidade virtual perto de um ícone de foguete,
        um notebook e um calendário"
        />
      )}
    </Flex>
  )
}
