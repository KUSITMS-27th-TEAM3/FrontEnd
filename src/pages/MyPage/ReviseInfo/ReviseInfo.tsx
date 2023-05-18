import Navbar from '../../../components/MainPageNavbar';
import Footer from '../../../components/Footer';
import {
    Title,
    TextForm,
    ImgForm
} from './components';
import styled from 'styled-components';

const RevisePageContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
`

const ReviseInfo = () => {
    return (
        <RevisePageContainer>
            <Navbar />
            <Title />
            <TextForm />
            {/* <ImgForm /> */}
            <Footer />
        </RevisePageContainer>
    )
}
export default ReviseInfo;