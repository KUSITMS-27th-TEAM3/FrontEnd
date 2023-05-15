import Navbar from '../../../components/MainPageNavbar';
import Footer from '../../../components/Footer';
// import {
//     Profile,
//     SlicePictures,
//     Stamp,
//     Question,
//     LinkPage
// } from './components';
import styled from 'styled-components';

const RevisePageContainer = styled.div`
    display : flex;
    flex-direction : column;
`

const ReviseInfo = () => {
    return (
        <RevisePageContainer>
            <Navbar />
            <Footer />
        </RevisePageContainer>
    )
}
export default ReviseInfo;