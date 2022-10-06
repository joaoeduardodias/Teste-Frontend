import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps): JSX.Element {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        variant="outline"
        borderColor="gray.600"
        border="1px"
        color="gray.600"
        fontSize="14px"
        fontWeight="400"
        rounded="2px"
        disabled
        _disabled={{
          cursor: 'not-allowed',
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      variant="outline"
      borderColor="gray.600"
      border="1px"
      color="gray.600"
      opacity="0.5"
      fontSize="14px"
      fontWeight="400"
      rounded="2px"
    >
      {number}
    </Button>
  )
}
