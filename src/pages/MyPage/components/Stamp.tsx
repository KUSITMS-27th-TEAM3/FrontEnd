import styled from "styled-components";

const StampWrapper = styled.div`
    // height : 390px;
    // border : 1px solid black;
    margin-bottom : 20px;

    img {
        width : 100%;
        height : auto;
        object-fit : cover;
    }
    `


const Stamp = () => {
    return (
        <StampWrapper>
            <img src="/img/StampBg.svg" />
        </StampWrapper>
    )
}
export default Stamp;