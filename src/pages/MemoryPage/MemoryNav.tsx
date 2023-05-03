import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { BlackLink, IconButton } from '../../styles/CommonStyle';

const hoverCss = css`
  .nav_pageTittle {
    color: ${(props) => props.theme.color.main.orange};
  }
  .navIcon {
    filter: invert(67%) sepia(15%) saturate(5627%) hue-rotate(336deg) brightness(103%)
      contrast(101%);
  }
`;

const NavBarContainer = styled.nav`
  display: flex;
  width: 80vw;
  height: 132px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.grayScale.white};
  align-items: center;
  color: black;
  border-bottom: 2px solid #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 560px;
  left: 10vw;
  border-radius: 16px;
  img {
    cursor: pointer;
  }

  .navbox {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-right: 2px solid #dddddd;
    height: 24px;
    flex: 1;

    &:hover {
      ${hoverCss}
    }

    &.active {
      ${hoverCss}
    }
  }

  .nav_title {
    font-family: ${(props) => props.theme.font.family.pretendard_bold};
    font-size: 24px;
    flex: 1;
    text-align: center;
    margin-left: 3.75vw;
  }

  .nav_pageTittle {
    color: ${(props) => props.theme.color.grayScale.gray};
    font-size: 16px;
    font-family: ${(props) => props.theme.font.family.pretendard_medium};
    margin-left: 1vw;
  }

  .nav_form {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3.75vw;
  }
`;

function MemoryNav() {
  const [activeNum, setActiveNum] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [age, setAge] = useState<string | number>('');

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleToWrite = (e: React.MouseEvent) => {
    navigate('/writeAlbum');
  };

  const handleNavToOne = () => {
    setActiveNum(1);
  };
  const handleNavToTwo = () => {
    setActiveNum(2);
  };
  const handleNavToThree = () => {
    setActiveNum(3);
  };

  useEffect(() => {
    if (location.pathname === '/memory') {
      setActiveNum(0);
    }
  }, [location]);

  return (
    <NavBarContainer>
      <div className="nav_title">추억앨범 서비스</div>
      <nav className={activeNum === 1 ? 'navbox active' : 'navbox'} onClick={handleNavToOne}>
        <BlackLink to="sharedAlbum">
          <img className="navIcon" src="/img/공유앨범.svg" alt="공유앨범" />
          <div className="nav_pageTittle">공유 앨범</div>
        </BlackLink>
      </nav>
      <nav className={activeNum === 2 ? 'navbox active' : 'navbox'} onClick={handleNavToTwo}>
        <BlackLink to="myAlbum">
          <img className="navIcon" src="/img/나의앨범.svg" alt="나의앨범" />
          <div className="nav_pageTittle">나의앨범</div>
        </BlackLink>
      </nav>
      <nav className={activeNum === 3 ? 'navbox active' : 'navbox'} onClick={handleNavToThree}>
        <BlackLink to="question">
          <img className="navIcon" src="/img/너의의미.svg" alt="너의의미" />
          <div className="nav_pageTittle">너의 의미</div>
        </BlackLink>
      </nav>
      <div className="nav_form">
        <FormControl
          sx={{
            m: 1,
            width: '11vw',
            maxWidth: 159,
            border: 'none',
            backgroundColor: '#F4F4F4',
            height: 56,
          }}
        >
          <Select
            value={age}
            onChange={handleChange}
            sx={{
              height: 56,
              border: 'none',
              fontFamily: 'Pretendard Medium',
              textAlign: 'center',
            }}
          >
            <MenuItem value="정렬방식선택" sx={{ fontFamily: 'Pretendard Medium' }}>
              정렬방식선택
            </MenuItem>
            <MenuItem value={10} sx={{ fontFamily: 'Pretendard Medium' }}>
              Ten
            </MenuItem>
            <MenuItem value={20} sx={{ fontFamily: 'Pretendard Medium' }}>
              Twenty
            </MenuItem>
            <MenuItem value={30} sx={{ fontFamily: 'Pretendard Medium' }}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
        <IconButton
          onClick={handleToWrite}
          width="calc(8.3vw - 36px)"
          height="32px"
          maxWidth="102px"
        >
          <div>앨범쓰기</div>
          <img src="/img/앨범쓰기.svg" alt="앨범쓰기" />
        </IconButton>
      </div>
    </NavBarContainer>
  );
}

export default MemoryNav;
