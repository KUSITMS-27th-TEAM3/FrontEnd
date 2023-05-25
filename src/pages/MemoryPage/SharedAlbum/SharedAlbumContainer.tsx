import AlbumPresenter from '../components/AlbumPresenter';
import { FlexContainer } from '../../../components/CommonStyle';
import AlbumButton from '../components/AlbumButton';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';
import { activeTagAtom, sortOptionAtom } from '../../../atom/atom';
import { useRecoilValue } from 'recoil';
import { getSharedAlbum } from './SharedAlbumApi';
import type { AlbumContent } from '../../../type/AlbumType';

const SharedAlbumContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState<AlbumContent[]>([]);
  const sortOption = useRecoilValue(sortOptionAtom);
  const activeTags = useRecoilValue(activeTagAtom);
  const [page, setPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(false);

  const fetchSharedAlbum = async (page: number, sortOption: string, activeTags: string[]) => {
    const data = await getSharedAlbum({ page, sortOption, activeTags });
    setLoading(false);
    setAlbumData([...albumData, ...data.content]);
    setHasNext(data.hasNext);
    setPage(page + 1);
  };

  const refetchAlbum = async (page: number, sortOption: string, activeTags: string[]) => {
    const data = await getSharedAlbum({ page, sortOption, activeTags });
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
    fetchSharedAlbum(page, sortOption, activeTags);
  };

  useEffect(() => {
    fetchSharedAlbum(page, sortOption, activeTags);
  }, []);

  useEffect(() => {
    refetchAlbum(0, sortOption, activeTags);
  }, [sortOption, activeTags]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FlexContainer>
      <AlbumPresenter albumData={albumData} />
      <AlbumButton text="공유 앨범 더보기" handleClick={handleFetchAlbum} />
    </FlexContainer>
  );
};

export default SharedAlbumContainer;
