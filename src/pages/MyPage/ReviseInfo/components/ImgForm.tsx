import styled from "styled-components";

const ImgFormContainer = styled.div`
    border : 1px solid blue;;
`

const ImgForm = () => {
    const formInfo = [{
        name: "프로필 사진"
    },
    {
        name: "마이펫 사진"
    }]
    return (
        <ImgFormContainer>
            ImgForm 입력란
        </ImgFormContainer>
    )
}
export default ImgForm;