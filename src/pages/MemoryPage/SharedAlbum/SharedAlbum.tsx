import AlbumPresenter from '../components/AlbumPresenter';
import styled from 'styled-components';
import { IconButton } from '../../../styles/CommonStyle';

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
      <IconButton width="150px" height="50px">
        <div>공유 앨범 더보기</div>
        <img src="/img/arrow.svg" alt="arrow" />
      </IconButton>
    </SharedAlbumContainer>
  );
};

export default SharedAlbum;
