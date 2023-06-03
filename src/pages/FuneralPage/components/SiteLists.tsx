import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../../components/common/CommonStyle';
import SiteCard from './SiteCard';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/common/Spinner';
import { getCardInfo } from './FuneralPageApi';
import { activeRegionTagAtom } from '../../../atom/atom';
import { useRecoilValue } from 'recoil';

export type CardInfo = {
  imgurl: string;
  runtype: string;
  openTime: string;
  closingTime: string;
  area: string;
  shopName: string;
  address: string;
  phoneNumber: string;
  url: string;
  page: number;
  size: number;
  hasNext: boolean;
};

const SiteLists = () => {
  const [isLoading, setLoading] = useState(true);
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);
  const [page, setPage] = useState<number>(0);
  const activeTags = useRecoilValue(activeRegionTagAtom);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const fetchCard = async (page: number, activeTags: string[]) => {
    const data = await getCardInfo({ page, activeTags });
    setLoading(false);
    setCardInfo([...cardInfo, ...data.content]);
    setHasNext(data.hasNext);
    setPage(page + 1);
  };

  const refetchCard = async (page: number, activeTags: string[]) => {
    const data = await getCardInfo({ page, activeTags });
    setCardInfo(data.content);
    setHasNext(data.hasNext);
    setPage(data.page + 1);
  };

  const handleFetchCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!hasNext) {
      alert('더 이상 장례 정보가 없습니다.');
      return;
    }
    fetchCard(page, activeTags);
  };

  useEffect(() => {
    fetchCard(page, activeTags);
  }, []);

  useEffect(() => {
    refetchCard(0, activeTags);
  }, [activeTags]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ListContainer>
      <div className="card-grid">
        {cardInfo.map((card, idx) => (
          <SiteCard card={card} key={idx} />
        ))}
      </div>
      <div className="background" />
      <IconButton
        width="12vw"
        height="41px"
        minWidth="130px"
        maxWidth="171px"
        id="show-more-button"
        onClick={handleFetchCard}
      >
        <div>장례 정보 더보기</div>
        <img src="/img/arrow.svg" alt="Arrow" />
      </IconButton>
      <div className="background" />
    </ListContainer>
  );
};

export default SiteLists;

const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.color.grayScale.brightLightGray};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-grid {
    max-width: 90vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
  }

  .background {
    height: 100px;
  }

  #show-more-button {
    margin-top: 20px;
  }

  @media screen and (max-width: 1430px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
