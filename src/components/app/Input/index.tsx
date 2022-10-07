/* eslint-disable no-unused-vars */
import { useState } from 'react'

import {
  Button,
  Flex,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

interface InputProps {
  name: string
  placeholder: string
  type: 'password' | 'text'
  value?: string

  setValue: (value: string) => void
  setIsInvalid: (value: boolean) => void
}

export function Input({
  name,
  placeholder,
  type,
  setIsInvalid,
  setValue,
  value,
}: InputProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <Flex direction="column" align="start" justify="center" w="100%">
      <FormLabel fontSize="1.25rem">{name}</FormLabel>
      {type === 'text' ? (
        <ChakraInput
          variant="outline"
          focusBorderColor="purple.700"
          placeholder={placeholder}
          _placeholder={{ opacity: 0.4, color: 'gray.600' }}
          borderColor="#171d2057"
          _hover={{ border: { opacity: 0.4, color: 'gray.600' } }}
          size="lg"
          value={value}
          onChange={e => {
            setValue(e.target.value)
            setIsInvalid(false)
          }}
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
                value={value}
                onChange={e => {
                  setValue(e.target.value)
                  setIsInvalid(false)
                }}
              />
              <InputRightElement>
                <Button
                  h="100%"
                  size="md"
                  onClick={handleClickShowPassword}
                  color="purple.700"
                  variant="unstyled"
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
