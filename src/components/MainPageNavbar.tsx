import styled from 'styled-components';
import { WhiteLink } from './CommonStyle';
import { useRecoilValue } from 'recoil';
import { isUploadAtom } from '../atom/atom';

const LinkContainer = styled.div`
  display: flex;
  width: 24%;
  justify-content: space-around;
  align-items: center;
`;

type NavBarProps = {
  isUpload?: boolean;
};

const NavBarContainer = styled.nav<NavBarProps>`
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
  z-index: 2;

  background-color: ${(props) =>
    props.isUpload ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0)'};
  top: ${(props) => (props.isUpload ? '0' : '0.6vw')};

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

  let Authorization = localStorage.getItem("Authorization");
  let RefreshToken = localStorage.getItem("RefreshToken");

  let toValue = "/";
  if (Authorization && RefreshToken) {
    toValue = `/main?Authorization=${Authorization}&RefreshToken=${RefreshToken}`
  }
  const isUpload = useRecoilValue(isUploadAtom);

  return (
    <NavBarContainer isUpload={isUpload}>
      <BIContainer>
        <WhiteLink to={toValue}>
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
