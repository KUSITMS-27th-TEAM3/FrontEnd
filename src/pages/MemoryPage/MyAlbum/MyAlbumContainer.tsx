import AlbumPresenter from '../components/AlbumPresenter';
import { FlexContainer } from '../../../components/common/CommonStyle';
import AlbumButton from '../components/AlbumButton';
import { useEffect, useState } from 'react';
import { activeTagAtom, sortOptionAtom } from '../../../atom/atom';
import { useRecoilValue } from 'recoil';
import Spinner from '../../../components/common/Spinner';
import { getMyAlbum } from './MyAlbumApi';
import NoAlbum from './components/NoAlbum';
import type { AlbumContent } from '../../../type/AlbumType';

const MyAlbumContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState<AlbumContent[]>([]);
  const sortOption = useRecoilValue(sortOptionAtom);
  const activeTags = useRecoilValue(activeTagAtom);
  const [page, setPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const fetchMyAlbum = async (page: number, sortOption: string, activeTags: string[]) => {
    const data = await getMyAlbum({ page, sortOption, activeTags });
    setLoading(false);
    setAlbumData([...albumData, ...data.content]);
    setHasNext(data.hasNext);
    setPage(page + 1);
  };

  const refetchAlbum = async (page: number, sortOption: string, activeTags: string[]) => {
    const data = await getMyAlbum({ page, sortOption, activeTags });
    setAlbumData(data.content);
    setHasNext(data.hasNext);
    setPage(data.page + 1);
  };

  const handleFetchAlbum = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!hasNext) {
      alert('더 이상 앨범이 없습니다.');
      return;
    }
    fetchMyAlbum(page, sortOption, activeTags);
  };

  useEffect(() => {
    fetchMyAlbum(page, sortOption, activeTags);
  }, []);

  useEffect(() => {
    refetchAlbum(0, sortOption, activeTags);
  }, [sortOption, activeTags]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <FlexContainer>
      {albumData.length === 0 ? <NoAlbum /> : <AlbumPresenter albumData={albumData} />}
      <AlbumButton text="나의 앨범 더보기" handleClick={handleFetchAlbum} />
    </FlexContainer>
  );
};

export default MyAlbumContainer;
