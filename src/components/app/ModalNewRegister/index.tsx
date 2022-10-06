import { useRef } from 'react'

import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  // eslint-disable-next-line prettier/prettier
  VStack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'

interface ModalNewRegisterProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalNewRegister({
  isOpen,
  onClose,
}: ModalNewRegisterProps): JSX.Element {
  const initialRef = useRef(null)

  const getDateandHours = new Date()

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        onClick={onClose}
        overflow="hidden"
        backdropFilter="auto"
        backdropBlur="2.5px"
      />
      <ModalContent bg="white" my="auto">
        <ModalCloseButton color="gray.600" onClick={onClose} />
        <ModalHeader mt="3.75rem">
          <Flex direction="column" align="center" justify="center">
            <Text
              fontWeight="700"
              fontSize="1.25rem"
              color="gray.600"
              mb="30px"
            >
              Registrar novo ponto
            </Text>
            <Icon
              icon="clarity:clock-solid"
              color="#330693"
              width="100"
              height="100"
            />
          </Flex>
        </ModalHeader>
        <ModalBody>
          <VStack spacing="5px" color="purple.700">
            <Heading fontWeight="700" fontSize="1.875rem">
              {`${getDateandHours.getHours()}:${getDateandHours.getMinutes()}`}
            </Heading>
            <Text fontSize="1rem" opacity="0.5">
              {getDateandHours.toLocaleDateString()}
            </Text>
          </VStack>
          <VStack mt="20px" mb="3.75rem" spacing="10px">
            <Button
              ref={initialRef}
              size="lg"
              bg="purple.700"
              color="white"
              w="12.5rem"
              fontWeight="400"
              _hover={{ bg: 'purple.800' }}
            >
              Bater ponto
            </Button>
            <Button
              size="lg"
              w="12.5rem"
              variant="outline"
              fontWeight="400"
              borderColor="purple.700"
              _hover={{ borderColor: 'red', color: 'red' }}
              color="purple.700"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
