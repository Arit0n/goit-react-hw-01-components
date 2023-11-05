import styled from 'styled-components';

export const List = styled.ul`
  margin: 50px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start
  padding: 15px;
  margin: 20px;
  width: 350px;
  border: 1px solid rgb(227, 227, 227);
  background-color: rgb(253, 253, 253);
  border-radius: 65px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;
export const Status = styled.span`
  display: inline-block;
  margin-left: 30px;
  margin-right: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${props => {
    switch (props.$variant) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;
export const Name = styled.p`
  margin-right: 20px;
  font-size: 30px;
  font-weight: 700;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;
