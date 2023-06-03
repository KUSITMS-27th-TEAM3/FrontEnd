import styled from 'styled-components';
import NavBar from './Navbar';
import MainPageNavbar from './MainPageNavbar';
import Footer from './Footer';

const PageContainer = styled.section``;

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
