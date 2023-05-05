import styled, { keyframes } from 'styled-components';
import { useScrollFadeIn } from "../../../hooks";
import { RefObject } from 'react';

type AnimatedStyle = {
  opacity: number;
  transform: string;
}

const S = {
  Image: styled.div`
    width : 100%;
    margin-top: 200px;
    position: relative;
    img{
      width : 100%;
      height : auto;
      object-fit : contain;
    }
    `,
  CardWrapper: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      width : 100%;
      z-index: 1;
      top : 30%;

    `,
  Card: styled.div`

    `

}

const CARD_IMGS = [
  {
    src: "/img/Petlose1.svg",
    name: "Card1"
  },
  {
    src: "/img/Petlose2.svg",
    name: "Card2"
  },
  {
    src: "/img/Petlose3.svg",
    name: "Card3"
  },
  {
    src: "/img/Petlose4.svg",
    name: "Card4"
  },
  {
    src: "/img/Petlose5.svg",
    name: "Card5s"
  },
]

const PetLose = () => {
  const animatedItem: { [key: number]: { ref: RefObject<HTMLDivElement>, style: AnimatedStyle } } = {
    0: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.2 }),
    2: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.6 }),
    3: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
    4: useScrollFadeIn({ direction: 'up', duration: 1, delay: 1.0 })
  };

  return (
    <S.Image>
      <img src="/img/PetloseBg.svg" alt="syndromeInfo"></img>
      <S.CardWrapper>
        {CARD_IMGS.map((item, index) => (
          <S.Card {...animatedItem[index]}><img src={item.src} key={index} /></S.Card>
        ))}
        {/* <S.Card1><img src="/img/Petlose1.svg" alt="Card1"></img></S.Card1>
        <S.Card2><img src="/img/Petlose2.svg" alt="Card2"></img></S.Card2>
        <S.Card3><img src="/img/Petlose3.svg" alt="Card3"></img></S.Card3>
        <S.Card4><img src="/img/Petlose4.svg" alt="Card4"></img></S.Card4>
        <S.Card5><img src="/img/Petlose5.svg" alt="Card5"></img></S.Card5> */}
      </S.CardWrapper>
    </ S.Image>
  )
}

export default PetLose