import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import MemoryNav from './MemoryNav';

const MemoryPage = () => {
  return (
    <div>
      <Navbar />
      <MemoryNav />
      <Outlet />
    </div>
  );
};

export default MemoryPage;
