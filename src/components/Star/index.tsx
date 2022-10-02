import { Image } from '@chakra-ui/react'

interface StarProps {
  left: string
  top: string
  src: string
}

export function Star({ left, top, src }: StarProps): JSX.Element {
  return <Image src={src} position="absolute" left={left} top={top} />
}
