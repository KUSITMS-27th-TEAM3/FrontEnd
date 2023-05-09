import styled from "styled-components";

const S = {
    StampWrapper: styled.div`
    width: 100%;
    height : 200px;
    border : 1px solid black;
    `
}

const Stamp = () => {
    return (
        <S.StampWrapper>
            Stamp
        </S.StampWrapper>
    )
}
export default Stamp;