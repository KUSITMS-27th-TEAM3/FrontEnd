import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  Profile,
  MainContent,
  Stamp,
  Question
} from './components';
import styled from 'styled-components';

const S = {
  MyPageContainer: styled.div`
    width : 100%;
    // height : 100vw;
    display : flex;
    flex-direction : column;
    align-items: center;    
  `
}

const MyPage = () => {
  return (
    <S.MyPageContainer>
      <Navbar />
      <Profile />
      <MainContent />
      <Stamp />
      <Question />
      <Footer />
    </S.MyPageContainer>
  );
};

export default MyPage;
