import { Button } from '@mui/material';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  position: absolute;
  left: 10vw;
  top: 0;
  width: 90vw;
  height: 70px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;

  .contentContainer {
    display: flex;
    width: 20vw;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .round {
    background-color: #d9d9d9;
    width: 37px;
    height: 37px;
    border-radius: 50%;
  }

  .nameBox {
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 14px;
  }

  .name {
    font-size: 15px;
  }

  .logo {
    margin-left: 10px;
  }
`;

const ExitIcon = styled.div`
  background-color: #e31e26;
  width: 62px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <div className="contentContainer">
        <span className="nameBox">
          <div className="round"></div>
          <div className="name">김땡땡</div>
        </span>
        <Button
          variant="text"
          sx={{ color: 'black', border: '1px solid #D9D9D9', width: '87px', height: '32px' }}
        >
          미리보기
        </Button>
        <ExitIcon></ExitIcon>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
