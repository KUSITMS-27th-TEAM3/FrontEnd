import { useNavigate } from 'react-router-dom';
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

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`/`);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentId = e.currentTarget.id;
    console.log(currentId);

    if (currentId === 'memory') {
      navigate(`/memory`);
    } else if (currentId === 'diary') {
      navigate('/diary');
    } else if (currentId === 'funeral') {
      navigate('/funeral ');
    } else if (currentId === 'login') {
      navigate('/login');
    } else if (currentId === 'mypage') {
      navigate('/mypage');
    }
  };

  return (
    <NavBarContainer>
      <img src="/img/BI.svg" alt="logo" onClick={handleLogoClick} />
      <button id="memory" onClick={handleNavClick}>
        추억앨범
      </button>
      <button id="diary" onClick={handleNavClick}>
        의미기록
      </button>
      <button id="funeral" onClick={handleNavClick}>
        장례정보
      </button>
      <button id="login" onClick={handleNavClick}>
        로그인
      </button>
      <button id="mypage" onClick={handleNavClick}>
        마이페이지
      </button>
    </NavBarContainer>
  );
};

export default NavBar;
