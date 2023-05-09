import styled from "styled-components";
import QuestionToggle from "./QuestionToggle";

const S = {
    QuestionWrapper: styled.div`
    width: 100%;
    height : 300px;
    border : 1px solid black;
    `
}

const Question = () => {
    return (
        <S.QuestionWrapper>
            <QuestionToggle />
            <QuestionToggle />
        </S.QuestionWrapper>
    )
}
export default Question;