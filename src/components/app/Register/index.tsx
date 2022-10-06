import { Box, Divider, Flex, Heading, ListItem, Text } from '@chakra-ui/react'

interface RegisterProps {
  name: string
  id: number
  date: string
  hour: string
}

export function Register({ date, hour, id, name }: RegisterProps): JSX.Element {
  return (
    <ListItem
      w="100%"
      h="4.57rem"
      border="1px"
      borderColor="#20292e4c"
      rounded="md"
      p={15}
    >
      <Flex w="100%" h="100%" align="center">
        <Divider
          border="5px"
          rounded="lg"
          h="90%"
          bg="purple.700"
          orientation="vertical"
        />
        <Box ml="2.5rem">
          <Heading as="strong" fontSize="1.375rem" fontWeight="700">
            {name}
          </Heading>
          <Text fontSize="1rem" fontWeight="400" opacity="0.5">
            {`00${id}`.slice(-3)}
          </Text>
        </Box>
        <Text
          fontSize="1.375rem"
          opacity="0.6"
          letterSpacing="0.02rem"
          ml="12.5rem"
        >
          {date}
        </Text>
        <Text
          fontSize="1.375rem"
          opacity="0.6"
          letterSpacing="0.02rem"
          ml="7.2rem"
        >
          {hour}
        </Text>
      </Flex>
    </ListItem>
  )
}
