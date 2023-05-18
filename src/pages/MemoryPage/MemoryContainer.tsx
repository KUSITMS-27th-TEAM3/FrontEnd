import { Outlet, useLocation } from 'react-router-dom';
import { MemoryNav, EmotionTags } from './components';
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import styled from 'styled-components';

const MemoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemoryContainer = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setCurrentPath(pathname);
  }, [location]);

  return (
    <MemoryWrapper>
      {currentPath !== '/memory/question' ? (
        <Banner url={'/img/앨범배너.svg'} />
      ) : (
        <Banner url={'/img/의미배너.svg'} />
      )}
      <MemoryNav />
      {currentPath !== '/memory/question' && (
        <EmotionTags width="80vw" isMargin={true} fontSize={16} />
      )}
      <Outlet />
    </MemoryWrapper>
  );
};

export default MemoryContainer;
