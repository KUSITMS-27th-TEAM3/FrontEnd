import styled from 'styled-components';
import { BasicLink } from '../styles/GlobalStyle';

const NavBarContainer = styled.nav`
  display: flex;
  width: 99vw;
  height: 70px;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  color: white;

  // position:absolute;
  // z-index: 1;
  // background-color: rgba(255, 255, 255, 0);

  img {
    cursor: pointer;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 10px;

    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <BasicLink to="/">
        <img src="/img/BI.svg" alt="logo" />
      </BasicLink>
      <BasicLink to="/memory">
        <button>추억앨범</button>
      </BasicLink>
      <BasicLink to="/diary">
        <button>의미기록</button>
      </BasicLink>
      <BasicLink to="/funeral">
        <button>장례정보</button>
      </BasicLink>
      <BasicLink to="/login">
        <button>로그인</button>
      </BasicLink>
      <BasicLink to="/mypage">
        <button>마이페이지</button>
      </BasicLink>
    </NavBarContainer>
  );
};

export default NavBar;
