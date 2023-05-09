import styled from 'styled-components';
import NavBar from './Navbar';
import Footer from './Footer';

const PageContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type LayoutProps = {
  children: React.ReactElement;
};

const LayoutContainer = ({ children }: LayoutProps) => {
  return (
    <PageContainer>
      <NavBar />
      {children}
      <Footer />
    </PageContainer>
  );
};

export default LayoutContainer;
