import React, { useEffect } from 'react';
import Navbar from '../../components/Layout/MainPageNavbar';
import Footer from '../../components/Layout/Footer';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
