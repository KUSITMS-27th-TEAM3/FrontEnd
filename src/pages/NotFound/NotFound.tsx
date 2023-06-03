import styled from 'styled-components';
import { IconButton, WhiteLink } from '../../components/common/CommonStyle';

const NotFoundContainer = styled.section`
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

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Header>Page Not Found 404</Header>
      <IconButton>
        <WhiteLink to="/">메인으로 돌아가기 </WhiteLink>
      </IconButton>
    </NotFoundContainer>
  );
};

export default NotFound;
