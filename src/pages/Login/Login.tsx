import Navbar from '../../components/MainPageNavbar';
import Footer from '../../components/Footer';
import {
  LoginPage
} from './components';
import styled from 'styled-components';

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginPage />
      <Footer />
    </div>
  );
};

export default Login;
