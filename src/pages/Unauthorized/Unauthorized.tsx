import styled from 'styled-components';
import { IconButton, WhiteLink } from '../../components/CommonStyle';

const UnAuthorizedContainer = styled.section`
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

const UnAuthorized = () => {
  return (
    <UnAuthorizedContainer>
      <Header>권한이 없습니다 401</Header>
      <IconButton>
        <WhiteLink to="/login">로그인 하러 가기</WhiteLink>
      </IconButton>
    </UnAuthorizedContainer>
  );
};

export default UnAuthorized;
