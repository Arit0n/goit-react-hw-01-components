import { Table, Thead, Th, Td, Tr } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>

      <tbody>
        {items.map(trans => {
          return (
            <Tr>
              <Td
                style={{
                  textTransform: 'capitalize',
                }}
              >
                {trans.type}
              </Td>
              <Td>{trans.amount}</Td>
              <Td>{trans.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};
