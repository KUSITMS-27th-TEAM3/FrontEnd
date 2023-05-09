import styled from 'styled-components';
import { WhiteLink } from './CommonStyle';

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
      width: 30%;
    }
  }

  display: flex;
  width: 100vw;
  height: 70px;
  align-items: center;
  justify-content: space-around;
  color: white;

  position: absolute;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0);
  top: 0.6vw;

  img {
    cursor: pointer;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 10px;
    font-family: ${(props) => props.theme.font.family.pretendard_medium};

    &:hover {
      color: ${(props) => props.theme.color.main.orange};
    }
  }
`;

const BIContainer = styled.div``;

const MainPageNavbar = () => {
    return (
        <NavBarContainer>
            <BIContainer>
                <WhiteLink to="/">
                    <img src="/img/BI.svg" alt="logo" />
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

export default MainPageNavbar;
