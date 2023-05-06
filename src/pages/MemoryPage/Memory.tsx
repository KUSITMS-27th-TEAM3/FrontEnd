import { Outlet } from 'react-router-dom';
import Advertisment from '../../components/Advertisment';
import MemoryNav from './components/MemoryNav';

const Memory = () => {
  return (
    <>
      <Advertisment />
      <MemoryNav />
      <Outlet />
    </>
  );
};

export default Memory;
