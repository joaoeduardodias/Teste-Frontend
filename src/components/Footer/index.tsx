import { Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'

export function Footer(): JSX.Element {
  return (
    <>
      <Flex
        w="100%"
        borderY="1px"
        borderColor="purple.700"
        mt="120px"
        minH="6.25rem"
        justify="center"
        align="center"
        py={['2', '2', '2', '0']}
      >
        <Flex
          direction={['column', 'column', 'row']}
          w="90%"
          maxW="35rem"
          h="100%"
          align="center"
          justify={['center', 'center', 'space-between', 'space-between']}
        >
          <Flex
            direction="column"
            align={['center', 'center', 'center', 'start']}
            justify="center"
          >
            <Text
              fontWeight="700"
              fontSize={['1rem', '1rem', '1rem', '1.25rem']}
            >
              @pontogo
            </Text>
            <Text
              fontSize={['0.8rem', '0.8rem', '0.8rem', '1rem']}
              mb={['3', '3', '0', '0']}
            >
              Se conecta com a gente
            </Text>
          </Flex>
          <Stack spacing="2.5rem" direction="row" h="100%" align="center">
            <Image
              src="./insta.svg"
              alt="Logo instagram"
              w={['43px', '50px', '60px']}
              h={['43px', '50px', '60px']}
            />
            <Image
              src="./facebook.svg"
              alt="Logo Facebook"
              w={['43px', '50px', '60px']}
              h={['43px', '50px', '60px']}
            />
            <Image
              src="./linkedin.svg"
              alt="Logo Linkedin"
              w={['43px', '50px', '60px']}
              h={['43px', '50px', '60px']}
            />
          </Stack>
        </Flex>
      </Flex>
      <Flex w="100%" my="3.75rem" flex="3" align="center" justify="center">
        <Divider />
        <Text
          fontSize={['0.8rem', '1rem']}
          w={['150%', '150%', '150%', '69%']}
          textAlign="center"
        >
          PontoGo - Todos direitos reservados
        </Text>
        <Divider />
      </Flex>
    </>
  )
}
