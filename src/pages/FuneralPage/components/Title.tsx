import styled from 'styled-components';

const Title = () => {
  return (
    <TitleContainer>
      <img src="/img/funeralBg.svg" alt="funeral" />
    </TitleContainer>
  );
};
export default Title;

const TitleContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  width: 100%;
`;
