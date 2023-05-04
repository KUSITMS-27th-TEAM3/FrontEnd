import styled from 'styled-components';
import { useScrollFadeIn } from "../../../hooks";

const S = {
  Image: styled.div`
    width : 100%;
    margin-top: 100px;
    position: relative;
    img{
      width : 100%;
      height : auto;
      object-fit : contain;
    }
    `,
  Card1: styled.div`
    position: absolute;
    z-index: 1;
    left : 41.5%;
    top : 22%;
    width: 20%;
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
      }
    `,
  Card2: styled.div`
    position: absolute;
    z-index: 1;
    left : 18%;
    top : 29%;
    width: 20%;
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
      }
    `,
  Card3: styled.div`
    position: absolute;
    z-index: 1;
    left : 65%;
    top : 34%;
    width: 20%;
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
      }
    `,
  Card4: styled.div`
    position: absolute;
    z-index: 1;
    left : 41.5%;
    top : 52%;
    width: 20%;
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
      }
    `,
  Card5: styled.div`
    position: absolute;
    z-index: 1;
    left : 65%;
    top : 64%;
    width: 20%;
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
      }
    `,

}

const PetLose = () => {
  const animatedItem = {
    0: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
    1: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 }),
    2: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.8 }),
    3: useScrollFadeIn({ direction: 'up', duration: 1, delay: 1.2 }),
    4: useScrollFadeIn({ direction: 'up', duration: 1, delay: 1.6 })
  };
  return (
    <S.Image>
      <img src="/img/PetloseBg.svg" alt="syndromeInfo"></img>
      <S.Card1 {...animatedItem[0]}><img src="/img/Petlose1.svg" alt="Card1"></img></S.Card1>
      <S.Card2 {...animatedItem[1]}><img src="/img/Petlose2.svg" alt="Card1"></img></S.Card2>
      <S.Card3 {...animatedItem[2]}><img src="/img/Petlose3.svg" alt="Card1"></img></S.Card3>
      <S.Card4 {...animatedItem[3]}><img src="/img/Petlose4.svg" alt="Card1"></img></S.Card4>
      <S.Card5 {...animatedItem[4]}><img src="/img/Petlose5.svg" alt="Card1"></img></S.Card5>
    </ S.Image>
  )
}

export default PetLose