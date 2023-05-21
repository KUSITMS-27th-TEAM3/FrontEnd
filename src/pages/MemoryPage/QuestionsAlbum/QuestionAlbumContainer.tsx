import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';
import { QuestionContent } from '../../../type/QuestionType';
import AlbumButton from '../components/AlbumButton';
import { getQuestion } from './QuestionAlbumApi';
import QuestionAlbumPresenter from './QuestionAlbumPresenter';
import { useRecoilState } from 'recoil';
import { refetchQuestionsAtom } from '../../../atom/atom';

const QuestionAlbumContainer = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [questionList, setQuestionList] = useState<QuestionContent[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [refetch, setRefetch] = useRecoilState<boolean>(refetchQuestionsAtom);

  type handleClickType = (hasNext: boolean, handleFetchData: () => void) => void;

  const handleClick: handleClickType = (hasNext, handleFetchData) => {
    if (!hasNext) {
      alert('더 이상 질문이 없습니다.');
      return;
    }
    fetchQuestion(page);
  };

  const fetchQuestion = async (page: number, size = 10) => {
    const question = await getQuestion(page, size);
    console.log(question);
    setQuestionList([...questionList, ...question.content]);
    setHasNext(question.hasNext);
    setPage(question.page + 1);
    setLoading(false);
  };

  const reFetchQuestion = async (page: number) => {
    const question = await getQuestion(0, page * 10);
    console.log('refetch', question);
    setQuestionList(question.content);
    setHasNext(question.hasNext);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchQuestion(page);
  }, []);

  useEffect(() => {
    if (refetch) {
      reFetchQuestion(page);
    }
    setRefetch(false);
  }, [refetch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <QuestionAlbumPresenter questionList={questionList} />
      <AlbumButton
        text="너의 의미 더보기"
        handleClick={() => handleClick(hasNext, () => fetchQuestion(page))}
      />
    </>
  );
};

export default QuestionAlbumContainer;
