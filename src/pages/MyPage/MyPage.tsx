import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer';
import {
  Profile,
  SlicePictures,
  Stamp,
  Question,
  LinkPage
} from './components';
import styled from 'styled-components';

const MyPageContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items: center;  
    justify-content : center;  
  `
const MainContentWrapper = styled.div`
// border : 1px solid black;
    display : flex;
    // justify-content : space-between;  
    margin-top : 35px;
    width : 80%;
    gap : 10px;
  `
const RightWrapper = styled.div`
  display : flex;
  flex-direction : column;
  // align-items : flex-end;
  // justify-content : center;
`
const MyPage = () => {
  return (
    <MyPageContainer>
      <Navbar />
      <Profile />
      <MainContentWrapper>
        <SlicePictures />
        <RightWrapper>
          <Stamp />
          <Question />
        </RightWrapper>
      </MainContentWrapper>
      <LinkPage />
      <Footer />
    </MyPageContainer>
  );
};

export default MyPage;
