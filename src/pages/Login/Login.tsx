import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer';
import { LoginPage } from './components';
import { useEffect, useState } from 'react';

const Login = () => {
  return (
    <div>
      <Navbar key="navbar" />
      <LoginPage key="loginPage" />
      <Footer key="footer" />
    </div>
  );
};

export default Login;
