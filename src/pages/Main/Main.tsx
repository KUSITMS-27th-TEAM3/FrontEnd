import React, { useEffect } from 'react';
import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Intro, Vision, PetLose, Function, Service1, Service2, Service3 } from './components';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

type NullableString = string | null;

const setToken = (key: string, token: NullableString) => {
  if (token) {
    sessionStorage.setItem(key, token);
  }
};

const Main = () => {
  useEffect(() => {
    const AuthorizationCode = new URL(window.location.href).searchParams.get('Authorization'); //url에서 AuthorizationCode를 가져옴
    const RefreshTokenCode = new URL(window.location.href).searchParams.get('RefreshToken');

    console.log('Authorization:', AuthorizationCode);
    console.log('RefreshToken:', RefreshTokenCode);

    setToken('Authorization', AuthorizationCode);
    setToken('RefreshToken', RefreshTokenCode);
  }, []);

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
    </MainContainer>
  );
};

export default Main;
