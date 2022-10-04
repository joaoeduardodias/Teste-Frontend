import { Image } from '@chakra-ui/react'

interface SmokeProps {
  top?: string
  bottom?: string
  src: string
  right?: string
  left?: string
}

export function Smoke({
  right = '0',
  left,
  src,
  bottom,
  top,
}: SmokeProps): JSX.Element {
  return (
    <Image
      position="absolute"
      top={top}
      right={right}
      src={src}
      left={left}
      bottom={bottom}
      alt="fumaça"
      zIndex="-1"
      mix-blend-mode="hard-light"
      opacity="0.5"
      w="619px"
      h="546px"
    />
  )
}
