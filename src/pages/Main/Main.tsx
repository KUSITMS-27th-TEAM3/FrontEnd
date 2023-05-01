import Navbar from '../../components/MainPageNavbar';
import styled from 'styled-components';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const MainContent = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  position : relative;

  div {
    width : 100%;
    img{
      width : 100%;
      height : auto;
      object-fit : contain;
    }
  }
  div.main2 {
    margin-top : 100px;
  }
  div.main4 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top : 150px;
    padding-bottom : 150px;
    img{
      width : 80%;
    }
  }
`
const Main = () => {

  // const trigger = useScrollTrigger({
  //   target: window,
  //   threshold: 0.5,
  // });

  return (
    <>
      <MainContent>
        <Navbar />
        <div className='main1'><img src="/img/main1.png" alt="serviceInfo"></img></div>
        <div className='main2'><img src="/img/main2.png" alt="syndromeInfo"></img></div>
        <div className='main3'><img src="/img/main3.png" alt="serviceInfo"></img></div>
        <div className='main4'><img src="/img/main4.png" alt="serviceFunction"></img></div>
        <div className='sitemap'><img src="/img/sitemap.png" alt="sitemap"></img></div>
      </MainContent>
    </>
  );
};

export default Main;
