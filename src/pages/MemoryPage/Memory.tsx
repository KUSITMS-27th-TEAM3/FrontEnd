import { Outlet, useLocation } from 'react-router-dom';
import Advertisment from '../../components/Advertisment';
import { MemoryNav, EmotionTags } from './components';
import { useEffect, useState } from 'react';

const Memory = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setCurrentPath(pathname);
  }, [location]);

  return (
    <>
      <Advertisment />
      <MemoryNav />
      {currentPath !== '/memory/question' && <EmotionTags />}
      <Outlet />
    </>
  );
};

export default Memory;
