import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Image: styled.div`
    width: 100%;
    position: relative;
  `,
  Background: styled.div`
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `,
  Slogan: styled.div`
    position: absolute; /* 자식 요소를 absolute로 설정 */
    top: 30%; /* 위에서 50% */
    left: 15%; /* 왼쪽에서 50% */
    z-index: 1; /* 텍스트를 이미지 위로 올림 */
    width: 10%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `,
  Text: styled.div`
    position: absolute; /* 자식 요소를 absolute로 설정 */
    top: 35%; /* 위에서 50% */
    left: 15%; /* 왼쪽에서 50% */
    width: 30%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `,
};

const Intro = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
  };

  return (
    <S.Image>
      <S.Background>
        <img src="/img/IntroBg.jpg" alt="serviceInfo"></img>
      </S.Background>
      <S.Slogan>
        <img src="img/IntroSlogan.svg" alt="ServiceSlogan"></img>
      </S.Slogan>
      <S.Text {...animatedItem[0]}>
        <img src="img/IntroTitle.svg" alt="ServiceTitle"></img>
      </S.Text>
    </S.Image>
  );
};

export default Intro;
