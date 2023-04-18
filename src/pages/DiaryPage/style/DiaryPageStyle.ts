import styled from 'styled-components';

export const ListContainer = styled.div`
  height: 150px;
  box-shadow: 2px 2px 2px gray;
  width: 50vw;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.sub};
  position: relative;
  margin: 15px;
`;
