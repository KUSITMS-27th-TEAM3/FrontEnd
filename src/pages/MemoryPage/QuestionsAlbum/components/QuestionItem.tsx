import styled from 'styled-components';
import type { QuestionContent } from '../QuestionAlbumPresenter';
import { useState } from 'react';
import QuestionWriteForm from './QuestionWriteForm';

const QuestionItemContainer = styled.button`
  all: unset;
  width: 80vw;
  height: 120px;
  background-color: ${({ theme }) => theme.color.main.lightOrange};
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .question_box {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }

  .question_circle {
    background-color: ${({ theme }) => theme.color.main.orange};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .question_content {
    margin-left: 24px;
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
  }

  .quesiton_arrow {
    margin-right: 40px;
    transition: 0.5s;

    &.active {
      transform: rotate(180deg);
      transition: 0.5s;
    }
  }
`;

type QuestionItemProps = {
  question: QuestionContent;
};

const QusetionItem = ({ question }: QuestionItemProps) => {
  const [canWrite, setCanWrite] = useState(false);

  const handleCanWrite = () => {
    setCanWrite(!canWrite);
  };

  return (
    <>
      <QuestionItemContainer onClick={handleCanWrite}>
        <div className="question_box">
          <div className="question_circle">
            <img src="/img/heart.svg" alt="heart" />
          </div>
          <div className="question_content">{question.questionTitle}</div>
        </div>
        <img
          src="/img/blackArrow.svg"
          alt="arrow"
          className={canWrite ? 'quesiton_arrow active' : 'quesiton_arrow'}
        />
      </QuestionItemContainer>
      {canWrite ? <QuestionWriteForm answerDescription={question.answerDescription} /> : null}
    </>
  );
};

export default QusetionItem;
