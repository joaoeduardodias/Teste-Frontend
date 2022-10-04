import { Button, Flex, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { Check, X } from 'phosphor-react'

interface PlanProps {
  type: string
  price: number
  colaborators: string | number
  advantages: number
  number: number
  current?: boolean
  showButton: boolean
}

export function Plan({
  advantages,
  number,
  colaborators,
  price,
  showButton,
  current = false,
  type,
}: PlanProps): JSX.Element {
  if (current) {
    return (
      <Flex
        direction="column"
        align="center"
        border="1px"
        borderColor="purple.700"
        backdropFilter="auto"
        backdropBlur="2.5px"
        bg="#752aa740"
        rounded="md"
        className={`keen-slider__slide number-slide${number}`}
        zIndex="50"
        minH={['26.25rem', '27.3rem', '30.6875rem']}
        w="333.333px"
      >
        <Text
          fontSize={['1rem', '1rem', '1.2rem', 'xl']}
          mt={['5', '5', '7', '10']}
        >
          Plano {type}
        </Text>
        <Heading
          as="h2"
          fontSize={['4xl', '4xl', '4xl', '5xl']}
          fontWeight="800"
          mt={['3', '3', '3', '5']}
        >
          R$ {price}
        </Heading>

        <Text
          as="span"
          color="purple.400"
          fontSize={['0.9rem', '1rem', '1rem']}
          fontWeight="light"
          mt={['1', '2']}
        >
          {colaborators === 'unlimited' ? (
            <>Acesso ilimitado</>
          ) : (
            <>Uso de {colaborators} colaboradores</>
          )}
        </Text>

        {advantages === 3 && (
          <VStack align="start" spacing="4" mt="5">
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>
                Acesso de {colaborators} colaboradores
              </Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <Icon as={X} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={X} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Email corporativo</Text>
            </Flex>
          </VStack>
        )}

        {advantages === 4 && (
          <VStack align="start" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>
                Acesso de {colaborators} colaboradores
              </Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Email corporativo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={X} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Suporte exclusivo</Text>
            </Flex>
          </VStack>
        )}

        {advantages === 5 && (
          <VStack align="start" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>
                Acesso de {colaborators} colaboradores
              </Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Email corporativo</Text>
            </Flex>
          </VStack>
        )}

        {showButton && (
          <Flex mt="30px" mb="4">
            <Button colorScheme="purple">Assinar agora</Button>
          </Flex>
        )}
      </Flex>
    )
  }
  if (!current) {
    return (
      <Flex
        direction="column"
        align="center"
        border="1px"
        borderColor="purple.700"
        rounded="md"
        backdropFilter="auto"
        backdropBlur="2.5px"
        minH={['21.875rem', '21.875rem', '25.6875rem']}
        opacity="30"
        className={`keen-slider__slide number-slide${number}`}
      >
        <Text fontSize="xl" mt="10">
          Plano {type}
        </Text>
        <Heading as="h2" fontSize="5xl" fontWeight="800" mt="5">
          R$ {price}
        </Heading>
        <Text as="span" color="purple.700" fontWeight="light" mt="2">
          {colaborators === 'unlimited' ? (
            <>Acessos ilimitados</>
          ) : (
            <>Uso de {colaborators} colaboradores</>
          )}
        </Text>

        {advantages === 3 && (
          <VStack align="start" spacing="4" mt="5">
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>
                Acesso de {colaborators} colaboradores
              </Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <Icon as={X} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={X} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Email corporativo</Text>
            </Flex>
          </VStack>
        )}

        {advantages === 4 && (
          <VStack align="start" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>
                Acesso de {colaborators} colaboradores
              </Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Email corporativo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={X} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Suporte exclusivo</Text>
            </Flex>
          </VStack>
        )}

        {advantages === 5 && (
          <VStack align="start" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>
                Acesso de {colaborators} colaboradores
              </Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <Icon as={Check} fontSize={18} />
              <Text fontSize={['0.8rem', '1rem']}>Email corporativo</Text>
            </Flex>
          </VStack>
        )}
      </Flex>
    )
  }
  return <h1>teste</h1>
}
