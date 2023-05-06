import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import MemoryNav from './components/MemoryNav';
import Advertisment from '../../components/Advertisment';
import styled from 'styled-components';
import Footer from '../../components/Footer';

const MemoryPageContainer = styled.section`
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MemoryPage = () => {
  return (
    <MemoryPageContainer>
      <Navbar />
      <Advertisment />
      <MemoryNav />
      <Outlet />
      <Footer />
    </MemoryPageContainer>
  );
};

export default MemoryPage;
