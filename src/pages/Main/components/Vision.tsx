import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Image: styled.div`
    width: 80%;
    padding-top: 80px;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `,
};

const Vision = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: 'right', duration: 1, delay: 0 }),
  };
  return (
    <S.Image {...animatedItem[0]}>
      <img src="/img/Vision.jpg" alt="ServiceVision"></img>
    </S.Image>
  );
};

export default Vision;
