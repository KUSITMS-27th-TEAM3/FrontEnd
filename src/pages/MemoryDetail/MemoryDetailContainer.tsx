import styled from 'styled-components';
import { ImageContainer } from '../WriteAlbum/components/style/ImageUploadStyle';
import { isUploadAtom } from '../../atom/atom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

const MemoryDetailWrapper = styled(ImageContainer)``;

const ImageBox = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  width: 765px;
  aspect-ratio: 1;
  transform: translate(-50%, 0);

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemoryDetailContainer = () => {
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);

  useEffect(() => {
    setIsUpload(true);

    return () => setIsUpload(false);
  }, []);

  return (
    <MemoryDetailWrapper>
      <span className="img_filter" />
      <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
      <ImageBox>
        <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
      </ImageBox>
    </MemoryDetailWrapper>
  );
};

export default MemoryDetailContainer;
