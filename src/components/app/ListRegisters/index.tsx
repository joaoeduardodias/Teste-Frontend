import { Box, List, ListItem } from '@chakra-ui/react'

import { Pagination } from '../Pagination'
import { Register } from '../Register'

interface ListRegistersProps {
  registeredTimes: {
    id: string
    created_at: string
    user: {
      name: string
      id: string
    }
  }[]
  timesPerPage: number
  totalTimes: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export function ListRegisters({
  registeredTimes,
  currentPage,
  paginate,
  timesPerPage,
  totalTimes,
}: ListRegistersProps): JSX.Element {
  return (
    <List mt="1.87rem" mb="1rem" spacing={15} color="gray.600" w="100%">
      <ListItem fontSize="1.375rem" fontWeight="600" display="flex">
        <Box w="24rem">Colaborador</Box>
        <Box w="12rem">Data</Box>
        <Box>Hora</Box>
      </ListItem>
      {registeredTimes.map(time => (
        <Register
          key={time.id}
          date={new Date(time.created_at).toLocaleDateString()}
          hour={`${new Date(time.created_at).getHours()}:${new Date(
            time.created_at
          ).getMinutes()} `}
          id={Number(time.user.id)}
          name={time.user.name}
        />
      ))}

      <Pagination
        curPage={currentPage}
        paginate={paginate}
        timesPerPage={timesPerPage}
        totalTimes={totalTimes}
      />
    </List>
  )
}
