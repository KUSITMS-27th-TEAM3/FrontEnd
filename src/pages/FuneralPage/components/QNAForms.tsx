import styled from 'styled-components';

type QuestionWriteFormProps = {
    answerDescription?: string;
};

const QNAForms = ({ answerDescription }: QuestionWriteFormProps) => {
    return (
        <FormContainer>
            <img src={answerDescription} />
        </FormContainer>
    )
}
export default QNAForms;

const FormContainer = styled.div`
    img {    
        width : 80vw;
        height : auto;
        object-fit : contain;
    }
`