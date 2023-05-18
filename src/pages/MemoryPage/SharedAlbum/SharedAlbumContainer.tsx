import AlbumPresenter from '../components/AlbumPresenter';
import { FlexContainer } from '../../../components/CommonStyle';
import AlbumButton from '../components/AlbumButton';

const SharedAlbumContainer = () => {
  return (
    <FlexContainer>
      <AlbumPresenter />
      <AlbumButton text="공유 앨범 더보기" />
    </FlexContainer>
  );
};

export default SharedAlbumContainer;
