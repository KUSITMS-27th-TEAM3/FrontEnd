import { Outlet, useLocation } from 'react-router-dom';
import { MemoryNav, EmotionTags } from './components';
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';

const Memory = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setCurrentPath(pathname);
  }, [location]);

  return (
    <>
      {currentPath !== '/memory/question' ? (
        <Banner url={'/img/앨범배너.svg'} />
      ) : (
        <Banner url={'/img/의미배너.svg'} />
      )}
      <MemoryNav />
      {currentPath !== '/memory/question' && <EmotionTags />}
      <Outlet />
    </>
  );
};

export default Memory;
