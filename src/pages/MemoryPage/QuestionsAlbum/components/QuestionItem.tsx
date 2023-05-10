import styled from 'styled-components';
import type { dayInfo } from '../QuestionAlbumPresenter';

const QuestionItemContainer = styled.div`
  width: 80vw;
  height: 120px;
  background-color: ${({ theme }) => theme.color.main.lightOrange};
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .question_content {
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

  .quesiton_arrow {
    margin-right: 40px;
  }
`;

type QuestionItemProps = {
  dayInfo: dayInfo;
};

const QusetionItem = ({ dayInfo }: QuestionItemProps) => {
  return (
    <QuestionItemContainer>
      <div className="question_content">
        <div className="question_circle">
          <img src="/img/heart.svg" alt="heart" />
        </div>
        <div>
          {dayInfo.date}:{dayInfo.content}
        </div>
      </div>
      <img src="/img/blackArrow.svg" alt="arrow" className="quesiton_arrow" />
    </QuestionItemContainer>
  );
};

export default QusetionItem;
