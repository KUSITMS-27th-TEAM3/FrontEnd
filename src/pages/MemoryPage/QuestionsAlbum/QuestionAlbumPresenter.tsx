import { useEffect, useState } from 'react';
import { FlexContainer } from '../../../components/CommonStyle';
import styled from 'styled-components';
import QuestionItem from './components/QuestionItem';

const QuestionAlbumContainer = styled(FlexContainer)`
  margin-top: 100px;
  width: 80vw;
  height: 100vh;
  overflow: auto;
`;

const day = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10'];

const QuestionAlbumPresenter = () => {
  const [dayList, setDayList] = useState<string[]>([]);

  useEffect(() => {
    setDayList([...day]);
  }, []);
  return (
    <QuestionAlbumContainer>
      {dayList.map((item, index) => (
        <QuestionItem item={item} />
      ))}
    </QuestionAlbumContainer>
  );
};

export default QuestionAlbumPresenter;
