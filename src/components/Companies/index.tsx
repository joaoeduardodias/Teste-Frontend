import { Flex, Image } from '@chakra-ui/react'

export function Companies(): JSX.Element {
  return (
    <Flex
      as="section"
      align="center"
      justify="space-between"
      mt="8.37rem"
      w="90%"
      maxW="64.75rem"
      mx="auto"
    >
      <Image src="./brainny.png" alt="Logo empresa Brainny" />
      <Image src="./amopet.svg" alt="Logo empresa Amo Pet" />
      <Image src="./bus.svg" alt="Logo empresa .Bus" />
      <Image src="./goStudy.svg" alt="Logo empresa GoStudy" />
    </Flex>
  )
}
