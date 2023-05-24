import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer';
import { LoginPage } from './components';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Login = () => {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    setShowComponents(true);
  }, []);

  return (
    <div>
      {showComponents && (
        <>
          <Navbar key="navbar" />
          <LoginPage key="loginPage" />
          <Footer key="footer" />
        </>
      )}
    </div>
  );
};

export default Login;
