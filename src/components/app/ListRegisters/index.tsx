import {
  Box,
  Divider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { Pagination } from '../Pagination'

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
    //       date={new Date(time.created_at).toLocaleDateString()}
    //       hour={`${new Date(time.created_at).getHours()}:${new Date(
    //         time.created_at
    //       ).getMinutes()} `}
    //       id={Number(time.user.id)}
    //       name={time.user.name}
    //     />
    //   ))}
    <>
      <TableContainer mt="20px" px="30px" w="100%">
        <Table
          variant="unstyled"
          color="gray.900"
          style={{ borderCollapse: 'separate', borderSpacing: '0 1em' }}
        >
          <Thead>
            <Tr>
              <Th fontSize="22px" p="0" w="312px" textTransform="none">
                Colaborador
              </Th>

              <Th fontSize="22px" w="258px" textTransform="none">
                Data
              </Th>

              <Th fontSize="22px" textTransform="none">
                Hora
              </Th>
            </Tr>
          </Thead>

          <Tbody bg="white" fontSize="22px">
            {registeredTimes.map(time => (
              <Tr key={time.id}>
                <Td
                  borderY="1px"
                  borderLeft="1px"
                  borderLeftRadius="5px"
                  borderColor="rgba(32, 41, 46, 0.2)"
                  pl="15px"
                >
                  <Flex alignItems="center">
                    <Divider
                      orientation="vertical"
                      w="5px"
                      height="45px"
                      bg="purple.500"
                      borderRadius="30px"
                      opacity="1"
                      mr="40px"
                    />

                    <Box>
                      <Text fontWeight="bold" mb="2px">
                        {time.user.name}
                      </Text>
                      <Text
                        fontSize="16px"
                        opacity="0.5"
                      >{`00${time.user.id}`}</Text>
                    </Box>
                  </Flex>
                </Td>

                <Td
                  opacity="0.6"
                  borderY="1px"
                  borderColor="rgba(32, 41, 46, 0.3)"
                >
                  {new Date(time.created_at).toLocaleDateString()}
                </Td>

                <Td
                  opacity="0.6"
                  borderY="1px"
                  borderRight="1px"
                  borderRightRadius="5px"
                  borderColor="rgba(32, 41, 46, 0.3)"
                >
                  {`${new Date(time.created_at).getHours()}:${new Date(
                    time.created_at
                  ).getMinutes()}h`}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        curPage={currentPage}
        paginate={paginate}
        timesPerPage={timesPerPage}
        totalTimes={totalTimes}
      />
    </>
    // </List>
  )
}
