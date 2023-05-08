import { Outlet } from 'react-router-dom';
import Advertisment from '../../components/Advertisment';
import { MemoryNav, EmotionTags } from './components';

const Memory = () => {
  return (
    <>
      <Advertisment />
      <MemoryNav />
      <EmotionTags />
      <Outlet />
    </>
  );
};

export default Memory;
