import styled from 'styled-components';
import QuestionItem from './components/QuestionItem';
import { QuestionContent } from '../../../type/QuestionType';

const QuestionAlbumContainer = styled.section`
  margin: 100px 10vw 5vw 10vw;
  width: 80vw;
  height: 100vh;
  overflow: auto;
`;

type QuestionAlbumProps = {
  questionList: QuestionContent[];
};

const QuestionAlbumPresenter = ({ questionList }: QuestionAlbumProps) => {
  return (
    <QuestionAlbumContainer>
      {questionList.map((question, idx) => (
        <QuestionItem question={question} key={question.questionId} questionNum={idx + 1} />
      ))}
    </QuestionAlbumContainer>
  );
};

export default QuestionAlbumPresenter;
