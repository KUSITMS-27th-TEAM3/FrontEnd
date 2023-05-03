import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import MemoryNav from './MemoryNav';
import Advertisment from '../../components/Advertisment';
import styled from '@emotion/styled';

const MemoryPageContainer = styled.section`
  position: relative;
`;

const MemoryPage = () => {
  return (
    <MemoryPageContainer>
      <Navbar />
      <Advertisment />
      <MemoryNav />
      <Outlet />
    </MemoryPageContainer>
  );
};

export default MemoryPage;
