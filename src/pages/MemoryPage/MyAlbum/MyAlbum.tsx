import AlbumPresenter from '../components/AlbumPresenter';
import styled from 'styled-components';
import { IconButton } from '../../../components/CommonStyle';

const MyAlbumContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MyAlbum = () => {
  return (
    <MyAlbumContainer>
      <AlbumPresenter />
      <IconButton width="171px" height="41px">
        <div style={{ marginLeft: '15px' }}>나의앨범 더보기</div>
        <img src="/img/arrow.svg" alt="arrow" />
      </IconButton>
    </MyAlbumContainer>
  );
};

export default MyAlbum;
