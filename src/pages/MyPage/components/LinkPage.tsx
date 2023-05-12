import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

const ContentWrapper = styled.div`
    margin-top : 35px;
    margin-bottom : 5%;
    // border : 1px solid black;
    display : flex;
    justify-content : center;
    width : 80%;

    div.banner {
        margin-right : 10px;
        position : relative;

        img {
            width : 100%;
            height : auto;
            object-fit : contain;
        }
    }

    div.bannerBtn {
        position : absolute;
        z-index: 1;
        top : 15vh;
        left : 5%;
    }

    button {
        border : none;
        cursor: pointer;
        border-radius : 8px;

        img {
            width : 100%;
            height : auto;
            object-fit : contain;
        }
    }
`
const LinkPage = () => {

    const navigate = useNavigate();
    const handleToAlbum = (e: React.MouseEvent) => {
        navigate('/writeAlbum');
    };
    const handleToDiary = (e: React.MouseEvent) => {
        navigate('/diary');
    };

    const banner_imgs = [
        { Bg: "/img/Banner1.svg", Btn: "/img/Banner1Button.svg", Event: handleToAlbum },
        { Bg: "/img/Banner2.svg", Btn: "/img/Banner2Button.svg", Event: handleToDiary }
    ];

    return (
        <ContentWrapper>
            {banner_imgs.map((item, idx) => (
                <div className="banner">
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