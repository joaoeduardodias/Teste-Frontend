import { Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'

export function Footer(): JSX.Element {
  return (
    <>
      <Flex
        w="100%"
        borderY="1px"
        borderColor="purple.700"
        mt="120px"
        h="6.25rem"
      >
        <Flex
          w="35rem"
          h="100%"
          mx="auto"
          align="center"
          justify="space-between"
        >
          <Flex direction="column" align="start" justify="center">
            <Text fontWeight="700" fontSize="20px">
              @pontogo
            </Text>
            <Text>Se conecta com a gente</Text>
          </Flex>
          <Stack spacing="2.5rem" direction="row" h="100%" align="center">
            <Image src="./insta.svg" alt="Logo instagram" w="60px" h="60px" />
            <Image src="./facebook.svg" alt="Logo Facebook" w="60px" h="60px" />
            <Image src="./linkedin.svg" alt="Logo Linkedin" w="60px" h="60px" />
          </Stack>
        </Flex>
      </Flex>
      <Flex w="100%" my="60px" flex="3" align="center" justify="center">
        <Divider />
        <Text fontSize="1rem" w="69%" textAlign="center">
          PontoGo - Todos direitos reservados
        </Text>
        <Divider />
      </Flex>
    </>
  )
}
