import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, SelectChangeEvent, useMediaQuery } from '@mui/material';
import { BlackLink, IconButton } from '../../../components/CommonStyle';
import * as S from './style/MemoryNavStyle';
import { useRecoilState } from 'recoil';
import { sortOptionAtom } from '../../../atom/atom';

const sortOptionData = [
  { value: 'DEFAULT', name: '정렬방식선택' },
  { value: 'EMPATHY', name: '공감순' },
  { value: 'COMMENT', name: '댓글순' },
];

function MemoryNav() {
  const [activeNum, setActiveNum] = useState(1);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useRecoilState(sortOptionAtom);
  const isResponsive = useMediaQuery('(max-width: 1024px)');
  const [sortOptionList, setSortOptionList] = useState(sortOptionData);

  const handleChange = (e: SelectChangeEvent) => {
    setSortOption(e.target.value);
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
    if (pathname === '/memory') {
      setActiveNum(0);
      setSortOptionList(sortOptionData.slice(0, 1));
    } else if (pathname === '/memory/sharedAlbum') {
      setActiveNum(1);
      setSortOptionList(sortOptionData);
    } else if (pathname === '/memory/myAlbum') {
      setActiveNum(2);
      setSortOptionList(sortOptionData);
    } else if (pathname === '/memory/question') {
      setActiveNum(3);
      setSortOptionList(sortOptionData.slice(0, 1));
    }
  }, [pathname]);

  return (
    <S.NavBarContainer>
      <div className="nav_title">추억기록 서비스</div>
      <S.NavBox
        className={activeNum === 1 ? 'active' : ''}
        onClick={handleNavToOne}
        isBorder={true}
      >
        <BlackLink to="sharedAlbum">
          <img className="navIcon" src="/img/공유앨범.svg" alt="공유앨범" />
          <div className="nav_pageTitle">공유 앨범</div>
        </BlackLink>
      </S.NavBox>
      <S.NavBox
        className={activeNum === 2 ? 'active' : ''}
        onClick={handleNavToTwo}
        isBorder={true}
      >
        <BlackLink to="myAlbum">
          <img className="navIcon" src="/img/나의앨범.svg" alt="나의앨범" />
          <div className="nav_pageTitle">나의앨범</div>
        </BlackLink>
      </S.NavBox>
      <S.NavBox
        className={activeNum === 3 ? 'active' : ''}
        onClick={handleNavToThree}
        isBorder={false}
      >
        <BlackLink to="question">
          <img className="navIcon" src="/img/너의의미.svg" alt="너의의미" />
          <div className="nav_pageTitle">너의 의미</div>
        </BlackLink>
      </S.NavBox>
      <div className="nav_form">
        <FormControl
          className="nav_formControl"
          size={isResponsive ? 'small' : 'medium'}
          sx={{ fontFamily: 'Pretendard Medium' }}
        >
          <Select
            value={sortOption}
            onChange={handleChange}
            className="nav_select"
            sx={{
              fontFamily: 'Pretendard Medium',
              textAlign: 'center',
              backgroundColor: '#F4F4F4',
              border: 0,
            }}
            displayEmpty
          >
            {sortOptionList.map(({ value, name }) => (
              <MenuItem value={value} sx={{ fontFamily: 'Pretendard Medium' }} key={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          onClick={handleToWrite}
          width="calc(8.3vw - 36px)"
          height="32px"
          maxWidth="102px"
          minWidth="80px"
        >
          <div>앨범쓰기</div>
          <img src="/img/앨범쓰기.svg" alt="앨범쓰기" />
        </IconButton>
      </div>
    </S.NavBarContainer>
  );
}

export default MemoryNav;
