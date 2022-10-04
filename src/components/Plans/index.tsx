import { useState } from 'react'

import { Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import { PlansData } from '../../utils/Plans'
import { Plan } from './Plan'

export function Plans(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [loaded, setLoaded] = useState(false)

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,

    loop: true,
    mode: 'snap',

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },

    breakpoints: {
      '(min-width: 450px)': {
        slides: { perView: 1, spacing: 3, origin: 'center' },
      },
      '(min-width: 1025px)': {
        slides: { perView: 2, spacing: -20, origin: 'center' },
      },
      '(min-width: 1290px)': {
        slides: { perView: 3, spacing: -20, origin: 'center' },
      },
    },
  })

  return (
    <Flex
      align="center"
      justify="center"
      w="90%"
      maxW="1140px"
      mx="auto"
      direction="column"
      mt="5.62rem"
    >
      <Heading
        as="h2"
        fontSize={['1.3rem', '1.3rem', '2.5rem']}
        fontWeight="800"
      >
        Encontre o plano perfeito
      </Heading>
      <Text
        maxW="40.06rem"
        mt="0.625rem"
        fontWeight="400"
        fontSize={['0.9rem', '1rem', '1.25rem']}
        lineHeight="30px"
        textAlign="center"
      >
        Escolha o plano que melhor se encaixa na sua empresa e faça sua
        assinatura, dentro de 72h iremos liberar seus acessos.
      </Text>

      {/* Slide */}

      <Grid
        templateColumns="repeat(3,auto)"
        justifyContent="center"
        alignItems="center"
        mt="4.37rem"
      >
        <Icon
          as={ArrowLeft}
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          mr="3"
          cursor="pointer"
          zIndex="50"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />

        <Flex
          ref={ref}
          maxW={['350px', '750px', '960px']}
          zIndex="0"
          align="center"
          className="keen-slider"
        >
          {Object.entries(PlansData).map(([key, value]) => (
            <Plan
              key={key}
              number={value.current}
              current={value.current === currentSlide}
              price={value.price}
              colaborators={value.colaborators}
              type={value.title}
              advantages={value.advantages}
              showButton={value.current === currentSlide}
            />
          ))}
        </Flex>

        <Icon
          as={ArrowRight}
          fontWeight="bold"
          fontSize="2xl"
          color="white"
          ml="3"
          cursor="pointer"
          zIndex="50"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </Grid>
    </Flex>
  )
}
