import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  position: relative;
  margin-top: 70px;

  img {
    max-width: 100%;
    height: auto;
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
