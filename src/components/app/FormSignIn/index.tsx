import { Button, Flex, Heading, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Input } from '../Input'

export function FormSignIn(): JSX.Element {
  const router = useRouter()
  function SignIn() {
    router.push('/app/meus-registros')
  }

  return (
    <Flex direction="column" align="start" justify="center" w="400px">
      <Heading
        fontWeight="700"
        fontSize="40px"
        color="purple.700"
        mt="1.875rem"
      >
        Faça login
      </Heading>
      <VStack spacing="1.25rem" mt="1.43rem" w="100%">
        <Input type="text" name="Email" placeholder="example@email.com" />
        <Input type="password" name="Senha" placeholder="*************" />
        <Button
          size="lg"
          bg="purple.700"
          color="white"
          w="100%"
          fontWeight="400"
          _hover={{ bg: 'purple.800' }}
          onClick={SignIn}
        >
          Entrar
        </Button>
      </VStack>
    </Flex>
  )
}