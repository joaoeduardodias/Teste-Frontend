import { Image } from '@chakra-ui/react'

interface SmokeProps {
  top: string
  src: string
  right?: string
  left?: string
}

export function Smoke({
  right = '0',
  left,
  src,
  top,
}: SmokeProps): JSX.Element {
  return (
    <Image
      position="absolute"
      top={top}
      right={right}
      src={src}
      left={left}
      alt="fumaça"
      mix-blend-mode="hard-light"
      opacity="0.5"
      w="619px"
      h="546px"
    />
  )
}
