import { Button, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { ListRegisters } from '../../components/app/ListRegisters'
import { SideBar } from '../../components/app/SideBar'

const MyRegister: NextPage = () => {
  function handleOpenModalNewRegister() {
    console.log('abrir modal')
  }

  return (
    <Flex overflow="hidden" w="100%" h="100vh" bg="#F2F2F2" flex={2}>
      <SideBar />
      <Flex align="start" w="100%" p="10" direction="column">
        <Button
          size="lg"
          bg="purple.700"
          color="white"
          w="12.5rem"
          fontWeight="400"
          _hover={{ bg: 'purple.800' }}
          onClick={handleOpenModalNewRegister}
        >
          Registrar ponto
        </Button>
        <ListRegisters />
      </Flex>
    </Flex>
  )
}

export default MyRegister
