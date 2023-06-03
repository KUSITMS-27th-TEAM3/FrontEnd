import styled from 'styled-components';
import { IconButton, WhiteLink } from '../../../../components/common/CommonStyle';

const NoAlbumContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.pretendard_bold};
`;
const Header = styled.header`
  font-size: 50px;
  margin-bottom: 50px;
`;

const NoAlbum = () => {
  return (
    <NoAlbumContainer>
      <Header>앨범이 없습니다</Header>
      <IconButton>
        <WhiteLink to="/writeAlbum">앨범쓰러 가기</WhiteLink>
      </IconButton>
    </NoAlbumContainer>
  );
};

export default NoAlbum;
