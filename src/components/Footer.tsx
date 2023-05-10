import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  position: relative;
  margin-top: 70px;
  height: 350px;

  img {
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src="/img/푸터.svg" />
    </FooterContainer>
  );
};

export default Footer;
