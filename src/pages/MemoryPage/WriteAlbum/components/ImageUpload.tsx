import { useRef } from 'react';
import AlbumIcon from '../../../../components/Icons/AlbumIcon';
import * as S from './style/ImageUploadStyle';

type ImageUploadProps = {
  profileImg: File | undefined;
  setProfileImg: React.Dispatch<React.SetStateAction<File | undefined>>;
};

const ImageUpload = ({ profileImg, setProfileImg }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    inputRef.current?.click();
  };

  return (
    <S.ImageContainer>
      <img src="/img/writeAlbumBg.svg" alt="serviceInfo" />
      <S.ImageUploadBox onClick={handleImageUpload}>
        <AlbumIcon width="30%" height="30%" />
        <input type="file" accept="image/*" ref={inputRef} hidden />
        <div className="imageCaption">사진을 추가해주세요</div>
      </S.ImageUploadBox>
    </S.ImageContainer>
  );
};

export default ImageUpload;
