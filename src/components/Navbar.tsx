import styled from 'styled-components';
import { WhiteLink } from '../styles/GlobalStyle';

const NavBarContainer = styled.nav`
  display: flex;
  width: 99vw;
  height: 70px;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  background-color: black;
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
      <WhiteLink to="/">
        <img src="/img/BI.svg" alt="logo" />
      </WhiteLink>
      <WhiteLink to="/memory">
        <button>추억앨범</button>
      </WhiteLink>
      <WhiteLink to="/diary">
        <button>의미기록</button>
      </WhiteLink>
      <WhiteLink to="/funeral">
        <button>장례정보</button>
      </WhiteLink>
      <WhiteLink to="/login">
        <button>로그인</button>
      </WhiteLink>
      <WhiteLink to="/mypage">
        <button>마이페이지</button>
      </WhiteLink>
    </NavBarContainer>
  );
};

export default NavBar;
