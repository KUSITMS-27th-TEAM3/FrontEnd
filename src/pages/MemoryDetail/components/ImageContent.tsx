import { useRecoilState } from 'recoil';
import { ImageContainer } from '../../WriteAlbum/components/style/ImageUploadStyle';
import { ImageBox } from './style/MemoryDetailStyle';
import { isUploadAtom } from '../../../atom/atom';
import { useEffect } from 'react';

type ImageContentProps = {
  imageUrl: string[];
};

const ImageContent = ({ imageUrl }: ImageContentProps) => {
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);

  useEffect(() => {
    setIsUpload(true);

    return () => setIsUpload(false);
  }, []);

  return (
    <ImageContainer>
      <span className="img_filter" />
      <img src={imageUrl && imageUrl[0]} alt="AlbumImg" />
      <ImageBox>
        <img src={imageUrl && imageUrl[0]} alt="AlbumImg" />
      </ImageBox>
    </ImageContainer>
  );
};

export default ImageContent;
