import styled from 'styled-components';

export const Table = styled.table`
  margin: 50px;
  width: 400px;
  text-align: center;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  background-color: rgba(0, 157, 196, 1);
  color: white;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  color: #818181
  border: 1px solid rgb(227, 227, 227);
`;
export const Td = styled.td`
  padding: 10px;
  border: 1px solid rgb(227, 227, 227);
  color: #818181;
`;
export const Tr = styled.tr`
  &:nth - child(2n) {
    background-color: rgb(234, 234, 234);
  }
`;
