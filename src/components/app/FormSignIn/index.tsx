import { FormEvent, useState } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  // eslint-disable-next-line prettier/prettier
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'

import { useLoginMutation } from '../../../graphql/generated/graphql'
import { Input } from '../Input'

export function FormSignIn(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const router = useRouter()

  const [login] = useLoginMutation()

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    let token = ''

    await login({
      variables: { password, identifier: email },
    })
      .then(({ data }) => (token = data?.login.jwt!))
      .catch(() => setIsInvalid(true))

    setCookie(null, 'nextAuth.token', token!, {
      maxAge: 60 * 60 * 24,
      path: '/app',
    })

    if (!token) return

    setEmail('')
    setPassword('')

    router.reload()
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
      <VStack
        as="form"
        spacing="1.25rem"
        mt="1.43rem"
        w="100%"
        onSubmit={handleLogin}
      >
        <FormControl isRequired isInvalid={isInvalid}>
          {isInvalid && (
            <FormHelperText fontSize="18px" color="red.500">
              Email ou senha invalidos
            </FormHelperText>
          )}
          <Input
            setIsInvalid={setIsInvalid}
            type="text"
            value={email}
            setValue={setEmail}
            name="Email"
            placeholder="example@email.com"
          />
        </FormControl>
        <FormControl isRequired isInvalid={isInvalid}>
          <Input
            type="password"
            name="Senha"
            placeholder="*************"
            setIsInvalid={setIsInvalid}
            setValue={setPassword}
            value={password}
          />
        </FormControl>

        <Button
          size="lg"
          bg="purple.700"
          color="white"
          w="100%"
          fontWeight="400"
          _hover={{ bg: 'purple.800' }}
          type="submit"
        >
          Entrar
        </Button>
      </VStack>
    </Flex>
  )
}
