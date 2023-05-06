import AlbumPresenter from '../components/AlbumPresenter';
import styled from 'styled-components';
import { IconButton } from '../../../components/CommonStyle';

const SharedAlbumContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SharedAlbum = () => {
  return (
    <SharedAlbumContainer>
      <AlbumPresenter />
      <IconButton width="171px" height="41px">
        <div style={{ marginLeft: '15px' }}>공유 앨범 더보기</div>
        <img src="/img/arrow.svg" alt="arrow" />
      </IconButton>
    </SharedAlbumContainer>
  );
};

export default SharedAlbum;
