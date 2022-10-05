import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  Text,
  useBreakpointValue,
  // eslint-disable-next-line prettier/prettier
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { List } from 'phosphor-react'

import { useMenuDrawer } from '../../../contexts/Landing/MenuDrawerContext'

export function Header(): JSX.Element {
  const { isOpen, onClose, onOpen } = useMenuDrawer()
  const showToggleButton = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })

  return (
    <Flex
      as="header"
      w="90%"
      maxW="1140px"
      mx="auto"
      pt="45px"
      zIndex="20"
      align="center"
      justifyContent="space-between"
    >
      <Image
        src="./logoWhite.svg"
        alt="Logo PontoGo"
        w={['7rem', '10.25rem']}
        h="38.15px"
      />
      {!showToggleButton ? (
        <Flex align="center" justifyContent="space-between" w="261px" h="100%">
          <Link href="/" passHref>
            <ChakraLink>
              <Text>Início</Text>
            </ChakraLink>
          </Link>
          <Link href="#plans" passHref>
            <ChakraLink>
              <Text>Planos</Text>
            </ChakraLink>
          </Link>
          <Button color="purple.700" fontWeight="normal">
            <Link href="/app/login" passHref>
              Fazer login
            </Link>
          </Button>
        </Flex>
      ) : (
        <>
          <Icon as={List} fontSize={34} onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent
                bg="purple.800"
                bgImage="url(/background.png)"
                p="4"
              >
                <DrawerCloseButton mt="9" mr="4" />

                <DrawerBody>
                  <VStack
                    justify="center"
                    align="center"
                    spacing="7"
                    h="100%"
                    fontSize="xl"
                  >
                    <Link href="/" passHref>
                      <ChakraLink>
                        <Text>Início</Text>
                      </ChakraLink>
                    </Link>
                    <Link href="#plans" passHref>
                      <ChakraLink>
                        <Text>Planos</Text>
                      </ChakraLink>
                    </Link>
                    <Button bg="white" color="purple.700" fontWeight="normal">
                      <Link href="/app/login" passHref>
                        Fazer login
                      </Link>
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
    </Flex>
  )
}
