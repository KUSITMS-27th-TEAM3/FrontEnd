import { useState } from 'react';
import QuestionWriteForm from './QuestionWriteForm';
import type { QuestionContent } from '../../../../type/QuestionType';
import { QuestionItemContainer } from './style/QuestionItemStyle';

type QuestionItemProps = {
  question: QuestionContent;
  questionNum: number;
};

const QusetionItem = ({ question, questionNum }: QuestionItemProps) => {
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
          <div className="question_content">
            {`Day${questionNum}`} : {question.questionTitle}
          </div>
        </div>
        <img
          src="/img/blackArrow.svg"
          alt="arrow"
          className={canWrite ? 'quesiton_arrow active' : 'quesiton_arrow'}
        />
      </QuestionItemContainer>
      {canWrite ? (
        <QuestionWriteForm
          answerDescription={question.answerDescription}
          questionId={question.questionId}
        />
      ) : null}
    </>
  );
};

export default QusetionItem;
