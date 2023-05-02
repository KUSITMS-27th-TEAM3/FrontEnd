import styled, { css } from 'styled-components';
import { BlackLink } from '../../styles/GlobalStyle';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const hoverCss = css`
  border-bottom: 2px solid ${(props) => props.theme.color.main.orange};

  .navtitle {
    color: ${(props) => props.theme.color.main.orange};
  }
  .navIcon {
    filter: invert(67%) sepia(15%) saturate(5627%) hue-rotate(336deg) brightness(103%)
      contrast(101%);
  }
`;

const NavBarContainer = styled.nav`
  display: flex;
  width: 570px;
  height: 96px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.grayScale.white};
  justify-content: space-between;
  align-items: center;
  color: black;
  border-bottom: 2px solid #ebebeb;
  img {
    cursor: pointer;
  }

  .navbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    padding-bottom: 18px;

    &:hover {
      ${hoverCss}
    }

    &.active {
      ${hoverCss}
    }
  }

  .navtitle {
    color: ${(props) => props.theme.color.grayScale.gray};
    font-size: 16px;
    font-family: ${(props) => props.theme.font.family.pretendard_medium};
  }
`;

function MemoryNav() {
  const [activeNum, setActiveNum] = useState(0);
  const location = useLocation();

  const handleNavToOne = () => {
    setActiveNum(1);
  };
  const handleNavToTwo = () => {
    setActiveNum(2);
  };
  const handleNavToThree = () => {
    setActiveNum(3);
  };
  const handleNavToFour = () => {
    setActiveNum(4);
  };

  useEffect(() => {
    if (location.pathname === '/memory') {
      setActiveNum(0);
    }
  }, [location]);

  return (
    <NavBarContainer>
      <BlackLink to="sharedAlbum">
        <nav className={activeNum === 1 ? 'navbox active' : 'navbox'} onClick={handleNavToOne}>
          <img className="navIcon" src="/img/공유앨범.svg" alt="공유앨범" />
          <div className="navtitle">공유 앨범</div>
        </nav>
      </BlackLink>
      <BlackLink to="writeAlbum">
        <nav className={activeNum === 2 ? 'navbox active' : 'navbox'} onClick={handleNavToTwo}>
          <img className="navIcon" src="/img/앨범쓰기.svg" alt="앨범쓰기" />
          <div className="navtitle">앨범쓰기</div>
        </nav>
      </BlackLink>
      <BlackLink to="myAlbum">
        <nav className={activeNum === 3 ? 'navbox active' : 'navbox'} onClick={handleNavToThree}>
          <img className="navIcon" src="/img/나의앨범.svg" alt="나의앨범" />
          <div className="navtitle">나의앨범</div>
        </nav>
      </BlackLink>
      <BlackLink to="question">
        <nav className={activeNum === 4 ? 'navbox active' : 'navbox'} onClick={handleNavToFour}>
          <img className="navIcon" src="/img/너의의미.svg" alt="너의의미" />
          <div className="navtitle">너의 의미</div>
        </nav>
      </BlackLink>
    </NavBarContainer>
  );
}

export default MemoryNav;
