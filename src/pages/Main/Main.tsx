import React, { useState, useEffect } from 'react';
import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer'
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

const MainContainer = styled.section`
  display : flex;
  flex-direction : column;
  align-items: center;
  position : relative;
`

const Main = () => {

  let AuthorizationCode = new URL(window.location.href).searchParams.get('Authorization');
  let RefreshTokenCode = new URL(window.location.href).searchParams.get('RefreshToken');

  if (AuthorizationCode && AuthorizationCode.includes("Bearer")) {
  } else {
    // "Bearer"를 포함하지 않는 경우 or null인 경우
    AuthorizationCode = "Bearer " + new URL(window.location.href).searchParams.get('Authorization');
  }

  console.log("Authorization:", AuthorizationCode);
  console.log("RefreshToken:", RefreshTokenCode);

  localStorage.setItem("Authorization", AuthorizationCode || "");
  localStorage.setItem("RefreshToken", RefreshTokenCode || "");

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
      <Footer />
    </ MainContainer>
  )
}

export default Main;