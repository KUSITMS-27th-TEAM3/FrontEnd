import styled from 'styled-components';
import { BasicLink } from '../../styles/GlobalStyle';

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

const MemoryNav = () => {
  return (
    <NavBarContainer>
      <button>
        <BasicLink to="myAlbum">나의앨범</BasicLink>
      </button>
      <button>
        <BasicLink to="question">질문열람</BasicLink>
      </button>
      <button>
        <BasicLink to="sharedAlbum">공유앨범</BasicLink>
      </button>
      <button>
        <BasicLink to="writeAlbum"> 앨범쓰기</BasicLink>
      </button>
    </NavBarContainer>
  );
};

export default MemoryNav;
