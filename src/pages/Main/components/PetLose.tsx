import styled, { keyframes } from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import { RefObject } from 'react';

type AnimatedStyle = {
  opacity: number;
  transform: string;
};

const S = {
  Image: styled.div`
    width: 100%;
    margin-top: 200px;
    position: relative;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `,
  CardWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 30%;
  `,
  Card: styled.div``,
};

const CARD_IMGS = [
  {
    src: '/img/Petlose1.svg',
    name: 'Card1',
  },
  {
    src: '/img/Petlose2.svg',
    name: 'Card2',
  },
  {
    src: '/img/Petlose3.svg',
    name: 'Card3',
  },
  {
    src: '/img/Petlose4.svg',
    name: 'Card4',
  },
  {
    src: '/img/Petlose5.svg',
    name: 'Card5s',
  },
];

const PetLose = () => {
  const animatedItem: { [key: number]: { ref: RefObject<HTMLDivElement>; style: AnimatedStyle } } =
  {
    0: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
    2: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.6 }),
    3: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
    4: useScrollFadeIn({ direction: 'up', duration: 1, delay: 1.0 }),
  };

  return (
    <S.Image>
      <img src="/img/PetloseBg.svg" alt="syndromeInfo"></img>
      <S.CardWrapper>
        {CARD_IMGS.map((item, index) => (
          <S.Card {...animatedItem[index]} key={index}>
            <img src={item.src} key={index} />
          </S.Card>
        ))}
      </S.CardWrapper>
    </S.Image>
  );
};

export default PetLose;
