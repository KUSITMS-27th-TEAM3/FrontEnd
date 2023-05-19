import styled from "styled-components";
import { CardInfo } from "./SiteLists";
import { useState, useEffect } from 'react';

type SiteCardItems = {
    card: CardInfo;
}

const SiteCard = ({ card }: SiteCardItems) => {

    const [hourBg, setHourBg] = useState("gray");
    const [regionBg, setRegionBg] = useState("gray");

    useEffect(() => {
        const checkColor = () => {
            if (card.region === "서울") {
                setHourBg("rgb(255,175,11)");
                setRegionBg("rgb(255,231,182)");
            } else if (card.region === "경기") {
                setHourBg("rgb(1,193,235)");
                setRegionBg("rgb(202,239,247)");
            } else if (card.region === "경남") {
                setHourBg("rgb(52,208,74)");
                setRegionBg("rgb(194,255,203)");
            } else if (card.region === "경북" || "울산" || "충남" || "충북" || "인천" || "강릉") {
                setHourBg("rgb(117,144,182)");
                setRegionBg("rgb(217,225,236)");
            } else {
                setHourBg("rgb(255,175,11)");
                setRegionBg("rgb(255,231,182)");
            }
        }
        checkColor();
    }, [card.region]);


    return (

        <SiteCardContainer>
            <a href={card.url}>
                <ImgWrapper>
                    <img src={card.imgUrl} />
                </ImgWrapper>
                <TextWrapper>
                    <div className="content1">
                        <div className="hour" style={{ backgroundColor: hourBg }}>{card.hour}</div>
                        <div className="region" style={{ backgroundColor: regionBg, color: hourBg }}>{card.region}</div>
                    </div>

                    <div className="content2">
                        <div className="name">{card.name}</div>
                    </div>

                    <div className="content3">
                        <div className="location">{card.location}</div>
                        <div className="telephone">{card.telephone}</div>
                    </div>
                </TextWrapper>
            </a>
        </SiteCardContainer >

    )
}
export default SiteCard;

const SiteCardContainer = styled.div`

    a:-webkit-any-link {
        color : black;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
    }

    background-color: white;
    border-radius: 8px;
    text-align: center;
    width: 23vw;
    height: 19vw;
    margin: 10px;
`

const ImgWrapper = styled.div`
    height : 60%;

    img { 
        width : 100%;
        heigh : auto;
        out-fit : cover;
    }
`
const TextWrapper = styled.div`
    height : 40%;
    border : 3px solid rgb(212,212,212);
    border-radius : 8px;

    div.content1 {
        display : flex;
        gap : 10px;
        margin :1vw 0 0 1vw;
        font-size : 0.8vw;
        font-family: ${({ theme }) => theme.font.family.pretendard_bold};

        div.hour { 
            color : white;
            // background-color: rgb(255,175,11);
            padding : 0.5vw;
            border-radius : 8px;
        }
        div.region {
            // background-color : rgb(255,231,182);
            // color: rgb(255,175,11);
            padding : 0.5vw;
            border-radius : 8px;
        }
    }

    div.content2 {
        display : flex;
        margin : 0.6vw 0 0 1vw;
        font-size : 1.3vw;
        font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    }

    div.content3 {
        display : flex;
        flex-direction : column;
        align-items : flex-start;
        gap : 3px;
        margin : 0.6vw 0 0 1vw;
        font-size : 0.7vw;
        color : ${({ theme }) => theme.color.grayScale.gray};
        font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    }
`