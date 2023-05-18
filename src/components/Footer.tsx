import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  position: relative;
  margin-top: 70px;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    height: 300px;
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
