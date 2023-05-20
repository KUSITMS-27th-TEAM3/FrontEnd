import styled from "styled-components";
import { IconButton } from "../../../components/CommonStyle";
import SiteCard from "./SiteCard";
import * as API from '../../../api/API';
import { useEffect, useState } from 'react';
import Spinner from "../../../components/Spinner";

const cardData = [
    {
        id: 1, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "경기",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "http://www.rememberpet.co.kr/?NaPm=ct%3Dlhig75wo%7Cci%3D0ym0000nf5Lyu%2Dz2guWd%7Ctr%3Dsa%7Chk%3D191469569f8fc6460793971e1109b45843394b33"
    },
    {
        id: 2, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 3, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "경남",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 4, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "충북",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 5, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "울산",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 6, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "경기",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 7, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "경북",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 8, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "경남",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 9, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 10, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 11, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 12, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 13, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 14, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 15, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 16, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
    {
        id: 17, imgUrl: "/img/funeralImg.svg", hour: "24시간", region: "서울",
        name: "하늘에별", location: "서울특별시 강동구 천호동 398-9 2층 201호",
        telephone: "1599-5677", url: "연결 링크"
    },
]

export type CardInfo = {
    id: number;
    imgUrl: string;
    hour: string;
    region: string;
    name: string;
    location: string;
    telephone: string;
    url: string;
};

const SiteLists = () => {
    const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

    useEffect(() => {
        setCardInfo([...cardData]);
    }, []);

    const [visibleCards, setVisibleCards] = useState(12);

    const handleShowMore = () => {
        setVisibleCards((preVisibleCards) => preVisibleCards + 9);
    }

    return (
        <ListContainer>
            <div className="card-grid">
                {cardInfo.slice(0, visibleCards).map((card, idx) => (
                    <SiteCard card={card} key={idx} />
                ))}
            </div>
            <IconButton width="12vw" height="41px" minWidth="130px" maxWidth="171px"
                id="show-more-button"
                onClick={handleShowMore}
            >
                장례 정보 더보기 <img src="/img/Arrow.svg" />
            </IconButton>
            <div className="background" />
        </ListContainer>
    );
};

export default SiteLists;

const ListContainer = styled.div`
    background-color : ${({ theme }) => theme.color.grayScale.brightLightGray};
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  .card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 90vw;
    max-height: 1000000vh;
    overflow-y: auto;
    padding: 10px;
  }

  .background {
    height : 100px;
  }

  #show-more-button {
    margin-top: 20px;
  }
`;
