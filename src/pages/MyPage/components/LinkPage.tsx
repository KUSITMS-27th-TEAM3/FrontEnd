import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

const ContentWrapper = styled.div`
    margin-top : 35px;
    margin-bottom : 2vw;
    display : flex;
    justify-content : center;
    width : 80%;

    div.banner {
        padding : 10px;
        position : relative;
        width : 100%;

        img {
            width : 100%;
            height : auto;
            object-fit : cover;
        }
    }

    div.bannerBtn {
        position : absolute;
        z-index: 1;
        top : 35%;
        left : 6%;
        width: 10vw; /* adjust to desired width */
        height: auto; /* adjust to desired height */

        img {
            width : 100%;
            height : auto;
            object-fit : cover;
        }

        button {
            all: unset;
            border : none;
            cursor: pointer;
            border-radius : 8px;
        }s
    }
`
const LinkPage = () => {

    const navigate = useNavigate();
    const handleToAlbum = (e: React.MouseEvent) => {
        navigate('/writeAlbum');
    };
    const handleToDiary = (e: React.MouseEvent) => {
        navigate('/memory/question');
    };

    const banner_imgs = [
        { Bg: "/img/Banner1.svg", Btn: "/img/Banner1Button.svg", Event: handleToAlbum },
        { Bg: "/img/Banner2.svg", Btn: "/img/Banner2Button.svg", Event: handleToDiary }
    ];

    return (
        <ContentWrapper>
            {banner_imgs.map((item, idx) => (
                <div className="banner" key={idx}>
                    <img src={item.Bg} alt="banner" />
                    <div className="bannerBtn">
                        <button onClick={item.Event}><img src={item.Btn} /></button>
                    </div>
                </div>
            ))}
        </ContentWrapper>
    )
}
export default LinkPage;