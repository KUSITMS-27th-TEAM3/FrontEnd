import React from 'react';
import Navbar from '../../components/MainPageNavbar';
import styled from 'styled-components';
import {
  Intro,
  Vision,
  PetLose,
  Function,
  Service1,
  Service2,
  Service3,
} from './components';

const MainContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  position : relative;
`

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <Intro />
      <Vision />
      <PetLose />
      <Function />
      <Service1 />
      <Service2 />
      <Service3 />
    </ MainContainer>
  )
}

export default Main;