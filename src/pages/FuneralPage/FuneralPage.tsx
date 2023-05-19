import React, { useEffect } from 'react';
import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Title, RegionTags, SiteLists, QNAPresenter } from './components';

const FuneralPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <Title />
      <RegionTags />
      <SiteLists />
      <QNAPresenter />
      <Footer />
    </MainContainer>
  );
};

export default FuneralPage;

const MainContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : cneter;
  align-items : center;
  width : 100vw;
`