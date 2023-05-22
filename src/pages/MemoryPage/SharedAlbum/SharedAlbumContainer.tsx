import AlbumPresenter from '../components/AlbumPresenter';
import { FlexContainer } from '../../../components/CommonStyle';
import AlbumButton from '../components/AlbumButton';
import { useEffect, useState } from 'react';
import * as API from '../../../api/APINotLogin';
import Spinner from '../../../components/Spinner';

export type getAlbumContentType = {
  albumId: number;
  imageUrl: string;
  commentCount: number;
  empathyCount: number;
  title: string;
};

const SharedAlbumContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState<getAlbumContentType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const getAlbum = async () => {
    const data = await API.get('/album?page=0&size=12&sortType=COMMENT');
    console.log(data);
    setLoading(false);
    setAlbumData(data.content);
  };

  useEffect(() => {
    getAlbum();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FlexContainer>
      <AlbumPresenter albumData={albumData} />
      <AlbumButton text="공유 앨범 더보기" />
    </FlexContainer>
  );
};

export default SharedAlbumContainer;
