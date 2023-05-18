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
  { questionId: 1, questionTitle: '내용1' },
  { questionId: 1, questionTitle: '내용2' },
  { questionId: 1, questionTitle: '내용3' },
  { questionId: 1, questionTitle: '내용4' },
  { questionId: 1, questionTitle: '내용5' },
  { questionId: 1, questionTitle: '내용6' },
  { questionId: 1, questionTitle: '내용7' },
  { questionId: 1, questionTitle: '내용8' },
  { questionId: 1, questionTitle: '내용9' },
  { questionId: 1, questionTitle: '내용10' },
];

export type dayInfo = {
  questionId: number;
  questionTitle: string;
  answerDescription?: string;
};

export type QuestionContent = {
  questionId: number;
  questionTitle: string;
  answerDescription?: string;
};

export type Question = {
  questionTitle: QuestionContent;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
};

const QuestionAlbumPresenter = () => {
  const [dayList, setDayList] = useState<dayInfo[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [questionList, setQuestionList] = useState<QuestionContent[]>([]);

  useEffect(() => {
    setDayList([...day]);
  }, []);

  const getQuestion = async () => {
    const data = await API.get('/question?page=0&size=10');
    console.log(data);
    setQuestionList(data.questionTitle);
    setLoading(false);
  };

  // useEffect(() => {
  //   getQuestion();
  // }, []);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <QuestionAlbumContainer>
      {dayList.map((question, idx) => (
        <QuestionItem question={question} />
      ))}
    </QuestionAlbumContainer>
  );
};

export default QuestionAlbumPresenter;
