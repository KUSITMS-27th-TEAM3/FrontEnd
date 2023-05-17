import { useRef, useState } from 'react';
import AlbumIcon from '../../../../components/Icons/AlbumIcon';
import * as S from './style/ImageUploadStyle';
import { isUploadAtom } from '../../../../atom/atom';
import { useRecoilState } from 'recoil';

type ImageUploadProps = {
  albumImg: string;
  setAlbumImg: (albumImg: string) => void;
};

const ImageUpload = ({ albumImg, setAlbumImg }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);
  const reader = new FileReader();

  const handleImageUploadBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    inputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setAlbumImg(reader.result as string);
      setIsUpload(true);
    };
  };

  return (
    <S.ImageContainer>
      <span className="img_filter" />
      <img src={albumImg ? albumImg : '/img/writeAlbumBg.svg'} alt="AlbumImg" />
      <S.ImageUploadBox onClick={handleImageUploadBtn} isUpload={isUpload}>
        <input type="file" accept="image/*" ref={inputRef} hidden onChange={handleImageUpload} />
        {isUpload ? (
          <img src={albumImg} alt="AlbumImg" />
        ) : (
          <>
            <AlbumIcon width="30%" height="30%" />
            <div className="imageCaption">사진을 추가해주세요</div>
          </>
        )}
      </S.ImageUploadBox>
    </S.ImageContainer>
  );
};

export default ImageUpload;
