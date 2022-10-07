import { Button, Stack } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  timesPerPage: number
  totalTimes: number
  curPage: number
  // eslint-disable-next-line no-unused-vars
  paginate: (pageNumber: number) => void
}
const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)
}

export function Pagination({
  curPage,
  paginate,
  timesPerPage,
  totalTimes,
}: PaginationProps): JSX.Element {
  const lastPage = Math.ceil(totalTimes / timesPerPage)

  const previousPages =
    curPage > 1
      ? generatePagesArray(curPage - 1 - siblingsCount, curPage - 1)
      : []

  const nextPages =
    curPage < lastPage
      ? generatePagesArray(curPage, Math.min(curPage + siblingsCount, lastPage))
      : []

  function handlePagination(curPage: number, position: 'left' | 'right') {
    if (curPage === 1 && position === 'left') return
    if (curPage === lastPage && position === 'right') return

    if (position === 'left') {
      paginate(curPage - 1)
    } else if (position === 'right') {
      paginate(curPage + 1)
    }
  }

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
        onClick={() => handlePagination(curPage, 'left')}
      >
        {'<'}
      </Button>
      <Stack direction="row" spacing="2">
        {curPage > 1 + siblingsCount && (
          <PaginationItem paginate={paginate} number={1} />
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => (
            <PaginationItem paginate={paginate} key={page} number={page} />
          ))}

        <PaginationItem paginate={paginate} number={curPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map(page => (
            <PaginationItem paginate={paginate} key={page} number={page} />
          ))}

        {curPage + siblingsCount < lastPage && (
          <PaginationItem paginate={paginate} number={lastPage} />
        )}
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
        onClick={() => handlePagination(curPage, 'right')}
      >
        {'>'}
      </Button>
    </Stack>
  )
}
