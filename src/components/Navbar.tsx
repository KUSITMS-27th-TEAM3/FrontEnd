import styled from 'styled-components';
import { WhiteLink } from '../styles/CommonStyle';

const LinkContainer = styled.div`
  display: flex;
  width: 24%;
  justify-content: space-around;
  align-items: center;
`;

const NavBarContainer = styled.nav`
  @media screen and (max-width: 1460px) {
    ${LinkContainer} {
      font-size: 10px;
    }
  }
  display: flex;
  width: 100vw;
  height: 70px;
  background-color: rgba(255, 255, 255);
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid black;

  img {
    cursor: pointer;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 10px;
    color: black;

    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

const BIContainer = styled.div``;

const NavBar = () => {
  return (
    <NavBarContainer>
      <BIContainer>
        <WhiteLink to="/">
          <img src="/img/BI2.svg" alt="logo" />
        </WhiteLink>
      </BIContainer>
      <LinkContainer>
        <WhiteLink to="/memory/sharedAlbum">
          <button>추억기록</button>
        </WhiteLink>
        <span> | </span>
        <WhiteLink to="/funeral">
          <button>장례정보</button>
        </WhiteLink>
        <span> | </span>
        <WhiteLink to="/login">
          <button>로그인</button>
        </WhiteLink>
        <span> | </span>
        <WhiteLink to="/mypage">
          <button>마이페이지</button>
        </WhiteLink>
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
