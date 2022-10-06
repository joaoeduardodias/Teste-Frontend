import { Flex, Image } from '@chakra-ui/react'

export function SideBar(): JSX.Element {
  return (
    <Flex
      w="9.375rem"
      h="100%"
      bg="white"
      color="black"
      boxShadow="lg"
      align="center"
      justify="initial"
      direction="column"
    >
      <Flex
        width="100%"
        h="6.375rem"
        borderBottom="1px"
        borderColor="gray.400"
        align="center"
        justify="center"
      >
        <Image src="/app/logoCor.svg" alt="Logo ponto go" width="90%" />
      </Flex>
      <p>terwgtrseg</p>
      <p>terwgtrseg</p>
      <p>terwgtrseg</p>
    </Flex>
  )
}
