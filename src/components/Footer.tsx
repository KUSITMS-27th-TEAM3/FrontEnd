import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  position: relative;
  margin-top: 70px;

  // height: 300px;

  img {
    width : 100%;
    height : auto;
    object-fit : contain;
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
