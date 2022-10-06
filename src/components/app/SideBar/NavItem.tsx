import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface NavItemProps {
  imgSrc: string
  title: string
  current?: boolean
  link: string
}

export function NavItem({
  imgSrc,
  title,
  current,
  link,
}: NavItemProps): JSX.Element {
  const router = useRouter()
  function handleSubmit() {
    router.push(link)
  }

  return (
    <Flex
      width="100%"
      h="6.375rem"
      borderBottom="1px"
      borderColor="gray.400"
      align="center"
    >
      {current && (
        <Divider
          bg="purple.700"
          h="103px"
          w="4px"
          opacity="1"
          orientation="vertical"
        />
      )}
      <Flex
        align="center"
        justify="start"
        w="87%"
        mx="auto"
        // h="100%"
        cursor="pointer"
        onClick={handleSubmit}
      >
        <Image src={imgSrc} w="24px" h="24px" />
        <Text
          fontSize="14px"
          color="purple.700"
          mt="1"
          ml="2"
          _hover={{ textDecoration: 'underline' }}
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
