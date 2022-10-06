import { Divider, Flex, Image, Text } from '@chakra-ui/react'

interface NavItemProps {
  imgSrc: string
  title: string
}

export function NavItem({ imgSrc, title }: NavItemProps): JSX.Element {
  return (
    <Flex
      width="100%"
      h="6.375rem"
      borderBottom="1px"
      borderColor="gray.400"
      align="center"
    >
      <Divider
        bg="purple.700"
        h="103px"
        w="4px"
        opacity="1"
        orientation="vertical"
      />
      <Flex align="center" justify="space-between" w="87%" mx="auto" h="100%">
        <Image src={imgSrc} w="24px" h="24px" />
        <Text fontSize="14px" color="purple.700" mt="1">
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
