import styled from 'styled-components';

export const Section = styled.section`
  margin: 50px;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;
export const Title = styled.h1`
  text-align: center;
  width: 300px;
  padding: 30px;
  margin: auto;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Item = styled.li`
  text-align: center;
  padding: 30px;
`;
export const Label = styled.span`
  color: white;
  display: block;
  text-shadow: 1px 1px 2px rgb(106, 106, 106), -1px -1px 2px rgb(106, 106, 106);
`;
export const Percentage = styled.span`
  color: white;
  text-shadow: 1px 1px 2px rgb(106, 106, 106), -1px -1px 2px rgb(106, 106, 106);
`;
