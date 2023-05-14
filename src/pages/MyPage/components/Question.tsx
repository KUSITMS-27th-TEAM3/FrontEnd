import styled from "styled-components";

const QuestionWrapper = styled.div`
    width: 100%;
    display : flex;
    justify-content : center;

    img {
        width : 100%;
        height : auto;
        object-fit : cover;
    }
    `

const Question = () => {
    return (
        <QuestionWrapper>
            <img src="/img/Question.svg" />
        </QuestionWrapper>
    )
}
export default Question;