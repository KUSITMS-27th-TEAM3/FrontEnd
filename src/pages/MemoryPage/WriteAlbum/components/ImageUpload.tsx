import AlbumIcon from '../../../../components/Icons/AlbumIcon';
import * as S from './style/ImageUploadStyle';

const ImageUpload = () => {
  return (
    <S.ImageContainer>
      <img src="/img/writeAlbumBg.svg" alt="serviceInfo" />
      <S.ImageUploadBox>
        <AlbumIcon width="30%" height="30%" />
        <div className="imageCaption">사진을 추가해주세요</div>
      </S.ImageUploadBox>
    </S.ImageContainer>
  );
};

export default ImageUpload;
