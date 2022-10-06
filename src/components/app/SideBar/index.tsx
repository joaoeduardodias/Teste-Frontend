import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'

import { NavItem } from './NavItem'

export function SideBar(): JSX.Element {
  return (
    <Flex
      w="200px"
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
      <Stack mb="auto" w="100%">
        <NavItem imgSrc="/app/iconDash.svg" title="Dashboard" current />
        <NavItem imgSrc="/app/editorIcon.svg" title="Meus registros" />
      </Stack>

      <Button w="100%" mb="2">
        <Icon icon="ant-design:logout-outlined" fontSize={24} />
        <Text fontWeight="400" fontSize="1rem" ml="11px">
          Sair
        </Text>
      </Button>
    </Flex>
  )
}
