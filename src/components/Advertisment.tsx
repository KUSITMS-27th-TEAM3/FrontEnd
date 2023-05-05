import styled from 'styled-components';

const AdContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 560px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grayScale.darkGray};
  position: relative;
`;

const Advertisment = () => {
  return <AdContainer>Advertisement</AdContainer>;
};

export default Advertisment;
