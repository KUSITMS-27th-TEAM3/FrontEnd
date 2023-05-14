import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScrollFadeIn } from "../../../hooks";

const S = {
    Image: styled.div`
    width : 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top : 150px;
    position: relative;
    left : -8%;
    img{
      width : 80%;
      height : auto;
      object-fit : contain;
    }
    `,
    Text: styled.div`
    position: absolute;
    z-index:1;
    top : 50%;
    left : 72%;
    width : 35%;
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
      }
    `,
    Button: styled.div`
    position: absolute;
    z-index:1;
    top : 50%;
    left : 72%;
    width: 14%;
    padding-top:12%;
    button {
        all: unset;
        cursor: pointer;
        padding: 10px;
      }
    img{
        width : 100%;
        height : auto;
        object-fit : contain;
        &:hover {
            border-bottom: 1px solid white;
          }
      }
    `
}

const Service1 = () => {

    const animatedItem = {
        0: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0 }),
        1: useScrollFadeIn({ direction: 'up', duration: 1, delay: 0.4 })
    };

    return (
        <S.Image>
            <img src="/img/Service1Bg.svg" alt="serviceFunction1"></img>
            <S.Text {...animatedItem[0]}>
                <img src="/img/Service1Text.svg" alt="service1Text"></img>
            </S.Text>
            <S.Button {...animatedItem[1]}>
                <Link to="/memory/sharedAlbum">
                    <button>
                        <img src="/img/Service1Btn.svg" alt="service1Button"></img>
                    </button>
                </Link>
            </S.Button>
        </ S.Image>
    )
}

export default Service1