import AlbumPresenter from '../components/AlbumPresenter';
import { FlexContainer } from '../../../components/CommonStyle';
import AlbumButton from '../components/AlbumButton';

const MyAlbumContainer = () => {
  return (
    <FlexContainer>
      <AlbumPresenter />
      <AlbumButton text="나의 앨범 더보기" />
    </FlexContainer>
  );
};

export default MyAlbumContainer;
