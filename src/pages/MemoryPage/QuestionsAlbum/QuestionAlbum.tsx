import AlbumButton from '../components/AlbumButton';
import QuestionAlbumPresenter from './QuestionAlbumPresenter';

const QuestionAlbum = () => {
  return (
    <>
      <QuestionAlbumPresenter />
      <AlbumButton text="너의 의미 더보기" />
    </>
  );
};

export default QuestionAlbum;
