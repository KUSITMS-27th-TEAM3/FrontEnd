import { useRecoilState } from 'recoil';
import { ImageContainer } from '../../WriteAlbum/components/style/ImageUploadStyle';
import { ImageBox } from './style/MemoryDetailStyle';
import { isUploadAtom } from '../../../atom/atom';
import { useEffect } from 'react';

const ImageContent = () => {
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);

  useEffect(() => {
    setIsUpload(true);

    return () => setIsUpload(false);
  }, []);

  return (
    <ImageContainer>
      <span className="img_filter" />
      <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
      <ImageBox>
        <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
      </ImageBox>
    </ImageContainer>
  );
};

export default ImageContent;
