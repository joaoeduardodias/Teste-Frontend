import { Button, Flex, Heading, Text } from '@chakra-ui/react'
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
        bg="#984cca40"
        rounded="md"
        className={`keen-slider__slide number-slide${number}`}
        zIndex="50"
        h="491px"
        w="333.333px"
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
          <Flex direction="column" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text> Acesso de {colaborators} colaboradores</Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Email corporativo</Text>
            </Flex>
          </Flex>
        )}

        {advantages === 4 && (
          <Flex direction="column" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Acesso de {colaborators} colaboradores</Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Email corporativo</Text>
            </Flex>
          </Flex>
        )}

        {advantages === 5 && (
          <Flex direction="column" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Acesso ilimitados</Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Email corporativo</Text>
            </Flex>
          </Flex>
        )}

        {showButton && (
          <Flex mt="30px">
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
        h="411px"
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
          <Flex direction="column" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text> Acesso de {colaborators} colaboradores</Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Email corporativo</Text>
            </Flex>
          </Flex>
        )}

        {advantages === 4 && (
          <Flex direction="column" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Acesso de {colaborators} colaboradores</Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Email corporativo</Text>
            </Flex>
          </Flex>
        )}

        {advantages === 5 && (
          <Flex direction="column" gap="4" mt="5">
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Área de meus registros</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Dashboard</Text>
            </Flex>
            <Flex align="center" gap="3">
              <Check size={18} />
              <Text>Acesso ilimitados</Text>
            </Flex>

            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Suporte exclusivo</Text>
            </Flex>
            <Flex align="center" gap="3" opacity="30">
              <X size={18} />
              <Text>Email corporativo</Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    )
  }
  return <h1>teste</h1>
}
