import SlicePictures from "./SlicePictures";
import LinkPage from "./LinkPage";
import styled from "styled-components";

const S = {
    MainContentWrapper: styled.div`
    width: 100%;
    height : 1100px;
    border : 1px solid black;
    `
}

const MainContent = () => {
    return (
        <S.MainContentWrapper>
            <SlicePictures />
            <LinkPage />
        </S.MainContentWrapper>
    )
}
export default MainContent;