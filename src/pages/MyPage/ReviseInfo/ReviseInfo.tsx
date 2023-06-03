import Navbar from '../../../components/layout/MainPageNavbar';
import Footer from '../../../components/layout/Footer';
import { Title, TextForm } from './components';
import styled from 'styled-components';

const RevisePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ReviseInfo = () => {
  return (
    <RevisePageContainer>
      <Navbar />
      <Title />
      <TextForm />
      <Footer />
    </RevisePageContainer>
  );
};
export default ReviseInfo;
