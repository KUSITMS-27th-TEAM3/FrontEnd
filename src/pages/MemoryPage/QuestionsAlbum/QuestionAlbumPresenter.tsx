import { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuestionItem from './components/QuestionItem';
import * as API from '../../../api/API';
import Spinner from '../../../components/Spinner';

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

export type QuestionContent = {
  questionId: number;
  questionTitle: string;
  answerDescription?: string;
};

export type Question = {
  content: QuestionContent;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
};

const QuestionAlbumPresenter = () => {
  // const [dayList, setDayList] = useState<dayInfo[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [questionList, setQuestionList] = useState<QuestionContent[]>([]);

  // useEffect(() => {
  //   setDayList([...day]);
  // }, []);

  const getQuestion = async () => {
    const data = await API.get('/question?page=0&size=10');
    console.log(data);
    setQuestionList(data.content);
    setLoading(false);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <QuestionAlbumContainer>
      {questionList.map((question, idx) => (
        <QuestionItem question={question} />
      ))}
    </QuestionAlbumContainer>
  );
};

export default QuestionAlbumPresenter;
