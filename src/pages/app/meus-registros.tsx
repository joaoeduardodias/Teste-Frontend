import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { SideBar } from '../../components/app/SideBar'

const MyRegister: NextPage = () => (
  <Flex w="100%" h="100vh" overflow="hidden" bg="#F2F2F2">
    <SideBar />
  </Flex>
)

export default MyRegister
