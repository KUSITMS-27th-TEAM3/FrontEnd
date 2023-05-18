import { statSync } from "fs";
import styled from "styled-components";

const TitleContainer = styled.div`
    width : 100vw;
    img {
        width : 100%;
        height : auto;
        object-fit : cover;
    }

`

const Title = () => {
    return (
        <TitleContainer>
            <img src="/img/ReviseBg.svg" />
        </TitleContainer>
    )
}
export default Title;