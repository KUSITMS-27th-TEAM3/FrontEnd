import Navbar from '../../components/layout/MainPageNavbar';
import Footer from '../../components/layout/Footer';
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
