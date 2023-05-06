import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grayScale.darkGray};
  position: relative;
  margin-top: 30px;
  color: ${({ theme }) => theme.color.grayScale.white};
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
