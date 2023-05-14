import styled from "styled-components";

const ContentWrapper = styled.div`
    // border : 1px solid black;
    width : 900px;
    position: relative;
    overflow: hidden;

    img {
        width : 100%;
        height : 100%;
        // position: absolute;
    }
`
const GridContainer = styled.div`
    display : grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);

    position : absolute;
    top : 0;
    left : 0;
    z-index: 1;
    width : 100%;
    height : 100%;
    box-sizing: border-box;

    div.grid-item-yes {
        border: 3px solid white;
    }
    div.grid-item-no {
        border: 3px solid white;
        background-color : rgb(0,0,0,0.5);
`

const SlicePictures = () => {
    const imageSrc = "/img/마이페이지배경.jpg";

    return (
        <ContentWrapper>
            <img src={imageSrc} alt="sliceImage" />
            <GridContainer>
                <div className="grid-item-yes"></div>
                <div className="grid-item-yes"></div>
                <div className="grid-item-yes"></div>
                <div className="grid-item-yes"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>
                <div className="grid-item-no"></div>

            </GridContainer>
        </ContentWrapper>
    )
}
export default SlicePictures;