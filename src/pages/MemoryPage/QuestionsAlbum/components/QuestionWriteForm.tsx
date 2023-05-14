import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 80vw;
  height: 240px;
  border-radius: 16px;
  background-color: #fff6f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 18px;

  .Form_buttons {
    width: 75vw;
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
  }

  .buttonbox {
    display: flex;
    flex-direction: row;
    width: 150px;
    justify-content: space-between;
  }
`;

const TextForm = styled.textarea`
  all: unset;
  width: 75vw;
  margin-top: 10px;
  height: 130px;
  padding: 20px;
  border-radius: 16px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  border-bottom: 1px solid #ffd3bf;
  &:focus {
    border: 1px solid #ffd3bf;
    padding: 20px;
  }
`;

const FormButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  width: 70px;
  height: 24px;
  align-items: center;
  justify-content: space-around;
`;

type QuestionWriteFormProps = {
  answerDescription?: string;
};

const QuestionWriteForm = ({ answerDescription }: QuestionWriteFormProps) => {
  const [textValue, setTextValue] = useState<string>('내용을 입력하세요.');
  const [canRevise, setCanRevise] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleRevise = () => {
    setCanRevise(true);
    textAreaRef.current?.focus();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleDelete = () => {
    setTextValue('내용을 입력하세요.');
  };

  const handleWrite = () => {
    setCanRevise(false);
    alert('입력되었습니다!');
  };

  useEffect(() => {
    if (!answerDescription) return;
    setTextValue(answerDescription);
  }, [answerDescription]);

  useEffect(() => {
    if (canRevise) {
      textAreaRef.current?.focus();
    }
  }, [canRevise]);

  return (
    <FormContainer>
      <TextForm
        value={textValue}
        disabled={!canRevise}
        onChange={handleTextChange}
        ref={textAreaRef}
      />
      <div className="Form_buttons">
        <div className="buttonbox">
          <FormButton onClick={handleRevise}>
            <div>수정</div>
            <img src="/img/revise.svg" alt="revise" />
          </FormButton>
          <FormButton onClick={handleDelete}>
            <div>삭제</div>
            <img src="/img/delete.svg" alt="delete" />
          </FormButton>
        </div>
        <FormButton onClick={handleWrite}>
          <div>입력</div>
          <img src="/img/write.svg" alt="write" />
        </FormButton>
      </div>
    </FormContainer>
  );
};

export default QuestionWriteForm;
