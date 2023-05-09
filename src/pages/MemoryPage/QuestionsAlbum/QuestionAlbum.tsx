import { FlexContainer } from '../../../components/CommonStyle';
import AlbumButton from '../components/AlbumButton';
import QuestionAlbumPresenter from './QuestionAlbumPresenter';

const QuestionAlbum = () => {
  return (
    <FlexContainer>
      <QuestionAlbumPresenter />
      <AlbumButton text="너의 의미 더보기" />
    </FlexContainer>
  );
};

export default QuestionAlbum;
