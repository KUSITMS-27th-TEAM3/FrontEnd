import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  width: 100vw;
  height: 70px;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  background-color: black;
  color: white;

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

const BasicLink = styled(Link)`
  color: white;
  text-decoration: none;
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
        <button>login</button>
      </BasicLink>
      <BasicLink to="/mypage">
        <button>마이페이지</button>
      </BasicLink>
    </NavBarContainer>
  );
};

export default NavBar;
