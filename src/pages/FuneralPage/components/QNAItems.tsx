import styled from 'styled-components';
import { useState } from 'react';
import type { QNAContent } from './QNAPresenter';
import QNAForms from './QNAForms';

type QuestionItemContainerProps = {
  canRead: boolean;
};

const QuestionItemContainer = styled.button<QuestionItemContainerProps>`
  all: unset;
  width: 80vw;
  height: 120px;
  background-color: ${({ theme }) => theme.color.main.lightOrange};

  border-radius: ${({ canRead }) => (canRead ? '16px 16px 0 0' : '16px')};
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size : 1.3vw;

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

const Answer = styled.div`
  position: relative;
  button.linkBtn { 
    position: absolute;
    bottom : 1.8vw;
    left: 2.5vw;
    z-index: 1;
    font-size : 0.6vw;
    cursor: pointer;
    padding : 0.6vw;
    border-radius : 8px;
    border : 1px solid ${(props) => props.theme.color.main.orange};
    background-color: rgb(0,0,0,0);
    color : ${(props) => props.theme.color.main.orange};
    font-family: ${(props) => props.theme.font.family.pretendard_medium};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${(props) => props.theme.color.main.orange};
      color : white;
      img {
        filter: brightness(0) invert(1);
      }
    }
    img {
      width : 1vw;
      margin-left : 2px;
    }
  }
`

type QNAItemProps = {
  question: QNAContent;
};

const QNAItems = ({ question }: QNAItemProps) => {
  const [canRead, setCanRead] = useState(false);

  const handleCanRead = () => {
    setCanRead(!canRead);
  };

  return (
    <>
      <QuestionItemContainer canRead={canRead} onClick={handleCanRead}>
        <div className="question_box">
          <div className="question_circle">
            <img src="/img/question_icon.svg" alt="heart" />
          </div>
          <div className="question_content">{question.questionTitle}</div>
        </div>
        <img
          src="/img/blackArrow.svg"
          alt="arrow"
          className={canRead ? 'quesiton_arrow active' : 'quesiton_arrow'}
        />
      </QuestionItemContainer>
      {canRead ? (
        <Answer>
          <QNAForms answerDescription={question.answerDescription} />
          {question.questionId === 6 && (
            <a href="https://eanimal.kr/"><button className='linkBtn'>동물 장례 정보 포털 바로가기<img src="/img/화살표.svg" /></button></a>
          )}
        </Answer>
      ) : null}
    </>
  );
};
export default QNAItems;
