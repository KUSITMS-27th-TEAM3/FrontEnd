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
            if (card.area === "서울") {
                setHourBg("rgb(255,175,11)");
                setRegionBg("rgb(255,231,182)");
            } else if (card.area === "경기") {
                setHourBg("rgb(1,193,235)");
                setRegionBg("rgb(202,239,247)");
            } else if (card.area === "경남") {
                setHourBg("rgb(52,208,74)");
                setRegionBg("rgb(194,255,203)");
            } else if (card.area === "경북" || "울산" || "충남" || "충북" || "인천" || "강릉") {
                setHourBg("rgb(117,144,182)");
                setRegionBg("rgb(217,225,236)");
            } else {
                setHourBg("rgb(255,175,11)");
                setRegionBg("rgb(255,231,182)");
            }
        }
        checkColor();
    }, [card.address]);


    return (

        <SiteCardContainer>
            <a href={card.url}>
                <ImgWrapper>
                    <img src={card.imgurl} />
                </ImgWrapper>
                <TextWrapper>
                    <div className="content1">
                        <div className="hour" style={{ backgroundColor: hourBg }}>{card.runtype === 'FULL_TIME' ? '24시간' : `${card.openTime} - ${card.closingTime}`}</div>
                        <div className="region" style={{ backgroundColor: regionBg, color: hourBg }}>{card.area}</div>
                    </div>

                    <div className="content2">
                        <div className="name">{card.shopName}</div>
                    </div>

                    <div className="content3">
                        <div className="location">{card.address}</div>
                        <div className="telephone">{card.phoneNumber}</div>
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
    }

    &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    background-color: white;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 10px;
`

const ImgWrapper = styled.div`
    height : 50%;

    img { 
        width : 100%;
        heigh : auto;
        out-fit : cover;
    }
`
const TextWrapper = styled.div`
    height : 50%;
    border : 3px solid rgb(212,212,212);
    border-radius : 0 0 8px 8px;

    div.content1 {
        display : flex;
        gap : 10px;
        margin : 3vw 0 0 1vw;
        font-size : 15px;
        font-family: ${({ theme }) => theme.font.family.pretendard_bold};

        div.hour { 
            color : white;
            // background-color: rgb(255,175,11);
            padding : 12px;
            border-radius : 8px;
        }
        div.region {
            // background-color : rgb(255,231,182);
            // color: rgb(255,175,11);
            padding : 12px;
            border-radius : 8px;
        }
    }

    div.content2 {
        display : flex;
        margin : 15px 0 0 1vw;
        font-size : 25px;
        font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    }

    div.content3 {
        display : flex;
        flex-direction : column;
        align-items : flex-start;
        gap : 3px;
        margin : 15px 0 0 1vw;
        font-size : 15px;
        color : ${({ theme }) => theme.color.grayScale.gray};
        font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    }

    @media screen and (max-width: 1430px) {
        div.content1{
            margin : 5vw 0 0 1vw;    
        }
      }
`