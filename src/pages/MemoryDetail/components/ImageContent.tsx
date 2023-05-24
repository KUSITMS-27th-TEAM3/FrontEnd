import { useRecoilState } from 'recoil';
import * as S from '../../WriteAlbum/components/style/ImageUploadStyle';
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
    <S.ImageContainer>
      <span className="img_filter" />
      <S.ImageBackground backgroundUrl={imageUrl[0]} />
      <ImageBox>
        <img src={imageUrl[0]} alt="AlbumImg" />
      </ImageBox>
    </S.ImageContainer>
  );
};

export default ImageContent;
