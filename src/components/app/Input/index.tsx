import { useState } from 'react'

import {
  Button,
  Flex,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  // eslint-disable-next-line prettier/prettier
  Text,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

interface InputProps {
  name: string
  placeholder: string
  type: 'password' | 'text'
}

export function Input({ name, placeholder, type }: InputProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <Flex direction="column" align="start" justify="center" w="100%">
      <Text fontSize="1.25rem">{name}</Text>
      {type === 'text' ? (
        <ChakraInput
          variant="outline"
          focusBorderColor="purple.700"
          placeholder={placeholder}
          _placeholder={{ opacity: 0.4, color: 'gray.600' }}
          borderColor="#171d2057"
          _hover={{ border: { opacity: 0.4, color: 'gray.600' } }}
          size="lg"
        />
      ) : (
        type === 'password' && (
          <>
            <InputGroup size="lg" width="100%">
              <ChakraInput
                variant="outline"
                focusBorderColor="purple.700"
                placeholder={placeholder}
                _placeholder={{ opacity: 0.4, color: 'gray.600' }}
                borderColor="#171d2057"
                _hover={{ border: { opacity: 0.4, color: 'gray.600' } }}
                size="lg"
                type={showPassword ? 'text' : 'password'}
              />
              <InputRightElement>
                <Button
                  h="100%"
                  size="md"
                  onClick={handleClickShowPassword}
                  color="purple.700"
                >
                  {showPassword ? (
                    <Icon icon="ant-design:eye-filled" fontSize={24} />
                  ) : (
                    <Icon
                      icon="ant-design:eye-invisible-filled"
                      fontSize={24}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Link href="#/" passHref>
              <ChakraLink
                fontSize="15px"
                color="purple.700"
                textDecoration="underline"
                mt="10px"
              >
                Esqueci minha senha
              </ChakraLink>
            </Link>
          </>
        )
      )}
    </Flex>
  )
}
