import { useEffect, useState } from 'react';
import { getDetailAlbum } from '../pages/MemoryDetail/MemoryDetailApi';
import { AlbumDetail, initialDetail } from '../type/AlbumType';

const useDetailInfo = (albumId: string | undefined) => {
  const [detailInfo, setDetailInfo] = useState<AlbumDetail>(initialDetail);

  const fetchDetailAlbum = async () => {
    const data = await getDetailAlbum(albumId);
    setDetailInfo(data);
  };

  useEffect(() => {
    fetchDetailAlbum();
  }, []);

  return { detailInfo, setDetailInfo };
};

export default useDetailInfo;
