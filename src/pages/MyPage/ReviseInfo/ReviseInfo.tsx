import Navbar from '../../../components/Layout/MainPageNavbar';
import Footer from '../../../components/Layout/Footer';
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
