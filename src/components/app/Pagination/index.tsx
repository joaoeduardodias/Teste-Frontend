import { Button, Stack } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

export function Pagination(): JSX.Element {
  return (
    <Stack direction="row" mt="8" align="center" spacing="2">
      <Button
        size="sm"
        w="4"
        variant="outline"
        borderColor="gray.600"
        border="1px"
        color="gray.600"
        opacity="0.5"
        fontSize="18px"
        fontWeight="400"
        rounded="2px"
      >
        {'<'}
      </Button>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </Stack>
      <Button
        size="sm"
        w="4"
        variant="outline"
        borderColor="gray.600"
        border="1px"
        color="gray.600"
        opacity="0.5"
        fontSize="18px"
        fontWeight="400"
        rounded="2px"
      >
        {'>'}
      </Button>
    </Stack>
  )
}
