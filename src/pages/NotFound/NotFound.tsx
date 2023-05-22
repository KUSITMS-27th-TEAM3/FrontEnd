import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <Button variant="outlined" color="error">
        <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Pretendard Bold' }}>
          Main으로 돌아가기
        </Link>
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;
