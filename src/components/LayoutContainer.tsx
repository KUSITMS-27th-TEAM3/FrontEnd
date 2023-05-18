import styled from 'styled-components';
import NavBar from './Navbar';
import Footer from './Footer';
import MainPageNavbar from './MainPageNavbar';

const PageContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type LayoutProps = {
  children: React.ReactElement;
  isMain?: boolean;
};

const LayoutContainer = ({ children, isMain }: LayoutProps) => {
  return (
    <PageContainer>
      {isMain ? <MainPageNavbar /> : <NavBar />}
      {children}
      <Footer />
    </PageContainer>
  );
};

export default LayoutContainer;
