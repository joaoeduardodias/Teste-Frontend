import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { ListRegisters } from '../../components/app/ListRegisters'
import { SideBar } from '../../components/app/SideBar'

const Dashboard: NextPage = () => (
  <Flex overflow="hidden" w="100%" h="100vh" bg="#F2F2F2" flex={2}>
    <SideBar />
    <Flex align="start" w="100%" p="10" direction="column">
      <ListRegisters />
    </Flex>
  </Flex>
)

export default Dashboard
