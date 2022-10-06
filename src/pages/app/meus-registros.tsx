import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { ListRegisters } from '../../components/app/ListRegisters'
import { ModalNewRegister } from '../../components/app/ModalNewRegister'
import { SideBar } from '../../components/app/SideBar'

const MyRegister: NextPage = () => {
  const { onOpen, isOpen, onClose } = useDisclosure() // open modal create new register

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
          onClick={onOpen}
        >
          Registrar ponto
        </Button>
        <ModalNewRegister isOpen={isOpen} onClose={onClose} />
        <ListRegisters />
      </Flex>
    </Flex>
  )
}

export default MyRegister
