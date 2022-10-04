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
      direction={['column', 'column', 'row', 'row']}
    >
      <Image
        src="./brainny.png"
        alt="Logo empresa Brainny"
        w={['9rem', '10rem', '10rem', 'auto']}
        mb={['2rem', '2rem', '0']}
      />
      <Image
        src="./amopet.svg"
        alt="Logo empresa Amo Pet"
        w={['9rem', '10rem', '10rem', 'auto']}
        mb={['2rem', '2rem', '0']}
      />
      <Image
        src="./bus.svg"
        alt="Logo empresa .Bus"
        w={['9rem', '10rem', '10rem', 'auto']}
        mb={['2rem', '2rem', '0']}
      />
      <Image
        src="./goStudy.svg"
        alt="Logo empresa GoStudy"
        w={['9rem', '10rem', '10rem', 'auto']}
      />
    </Flex>
  )
}
