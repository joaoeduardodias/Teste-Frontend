import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'

import { NavItem } from './NavItem'

export function SideBar(): JSX.Element {
  const router = useRouter()

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
      <Flex mb="auto" w="100%">
        {router.asPath === '/app/meus-registros' ? (
          <NavItem
            imgSrc="/app/editorIcon.svg"
            title="Meus registros"
            current
          />
        ) : (
          router.asPath === '/app/dashboard' && (
            <NavItem imgSrc="/app/iconDash.svg" title="Dashboard" current />
          )
        )}
      </Flex>

      <Button
        w="100%"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        mb="2"
        onClick={() => {
          destroyCookie(null, 'nextAuth.token')

          router.reload()
        }}
      >
        <Icon icon="ant-design:logout-outlined" fontSize={24} />
        <Text fontWeight="400" fontSize="1rem" ml="11px">
          Sair
        </Text>
      </Button>
    </Flex>
  )
}
