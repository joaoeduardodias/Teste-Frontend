import { Box, List, ListItem } from '@chakra-ui/react'

import { Pagination } from '../Pagination'
import { Register } from '../Register'

export function ListRegisters(): JSX.Element {
  return (
    <List mt="1.87rem" mb="1rem" spacing={15} color="gray.600" w="100%">
      <ListItem fontSize="1.375rem" fontWeight="600" display="flex">
        <Box w="24rem">Colaborador</Box>
        <Box w="12rem">Data</Box>
        <Box>Hora</Box>
      </ListItem>

      <Register date="06/10/22" hour="18:30h" id={1} name="João Dias" />
      <Register date="06/10/22" hour="18:30h" id={1} name="João Dias" />
      <Register date="06/10/22" hour="18:30h" id={1} name="João Dias" />
      <Register date="06/10/22" hour="18:30h" id={1} name="João Dias" />

      <Pagination />
    </List>
  )
}
