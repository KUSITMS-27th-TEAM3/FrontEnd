import styled from 'styled-components';
import { BlackLink } from '../../styles/GlobalStyle';

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
    padding-bottom: 16px;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.color.main.orange};
    }
  }

  .navtitle {
    color: ${(props) => props.theme.color.grayScale.gray};
    font-size: 16px;
    font-family: ${(props) => props.theme.font.family.pretendard_medium};
  }
`;

function MemoryNav() {
  return (
    <NavBarContainer>
      <BlackLink to="sharedAlbum">
        <nav className="navbox">
          <img src="/img/공유앨범.svg" alt="공유앨범" />
          <div className="navtitle">공유 앨범</div>
        </nav>
      </BlackLink>
      <BlackLink to="writeAlbum">
        <nav className="navbox">
          <img src="/img/앨범쓰기.svg" alt="앨범쓰기" />
          <div className="navtitle">앨범쓰기</div>
        </nav>
      </BlackLink>
      <BlackLink to="myAlbum">
        <nav className="navbox">
          <img src="/img/나의앨범.svg" alt="나의앨범" />
          <div className="navtitle">나의앨범</div>
        </nav>
      </BlackLink>
      <BlackLink to="question">
        <nav className="navbox">
          <img src="/img/너의의미.svg" alt="너의의미" />
          <div className="navtitle">너의 의미</div>
        </nav>
      </BlackLink>
    </NavBarContainer>
  );
}

export default MemoryNav;
