import styled from 'styled-components';
import { useScrollClipPath } from "../../../hooks";


const S = {
    Image: styled.div`
    width : 80%;
    padding-top : 80px;
    img{
      width : 100%;
      height : auto;
      object-fit : contain;
    }
    `

}

const Vision = () => {
    const animatedImage = useScrollClipPath();
    return (
        <S.Image {...animatedImage}>
            <img src="/img/vision.svg" alt="ServiceVision"></img>
        </ S.Image>
    )
}

export default Vision