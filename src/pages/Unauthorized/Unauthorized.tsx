import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnAuthorizedContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  font-size: 50px;
  margin-bottom: 50px;
`;

const UnAuthorized = () => {
  return (
    <UnAuthorizedContainer>
      <Header>401 권한이 없습니다</Header>
      <Button variant="outlined" color="error">
        <Link to="/" style={{ textDecoration: 'none' }}>
          Main으로 돌아가기
        </Link>
      </Button>
    </UnAuthorizedContainer>
  );
};

export default UnAuthorized;
