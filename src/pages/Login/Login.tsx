import Navbar from '../../components/Layout/MainPageNavbar';
import Footer from '../../components/Layout/Footer';
import { LoginPage } from './components';

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
