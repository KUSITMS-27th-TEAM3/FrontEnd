import { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuestionItem from './components/QuestionItem';

const QuestionAlbumContainer = styled.section`
  margin: 100px 10vw 5vw 10vw;
  width: 80vw;
  height: 100vh;
  overflow: auto;
`;

const day = [
  { date: 'Day1', content: '내용1' },
  { date: 'Day2', content: '내용2' },
  { date: 'Day3', content: '내용3' },
  { date: 'Day4', content: '내용4' },
  { date: 'Day5', content: '내용5' },
  { date: 'Day6', content: '내용6' },
  { date: 'Day7', content: '내용7' },
  { date: 'Day8', content: '내용8' },
  { date: 'Day9', content: '내용9' },
  { date: 'Day10', content: '내용10' },
];

export type dayInfo = {
  date: string;
  content: string;
};

const QuestionAlbumPresenter = () => {
  const [dayList, setDayList] = useState<dayInfo[]>([]);

  useEffect(() => {
    setDayList([...day]);
  }, []);
  return (
    <QuestionAlbumContainer>
      {dayList.map((dayInfo, index) => (
        <QuestionItem dayInfo={dayInfo} />
      ))}
    </QuestionAlbumContainer>
  );
};

export default QuestionAlbumPresenter;
