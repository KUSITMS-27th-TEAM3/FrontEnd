import styled from 'styled-components';
import { ImageContainer } from '../WriteAlbum/components/style/ImageUploadStyle';
import { isUploadAtom } from '../../atom/atom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import DeleteModal from '../../components/DeleteModal';
import { FlexContainer } from '../../components/CommonStyle';

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

const DetailWrapper = styled(FlexContainer)`
  justify-content: center;
  width: 80vw;
  height: 100vh;
  margin: 100px 10vw 5vw 10vw;
  border: 1px solid black;
`;

const MemoryDetailContainer = () => {
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);

  useEffect(() => {
    setIsUpload(true);

    return () => setIsUpload(false);
  }, []);

  return (
    <>
      <ImageContainer>
        <span className="img_filter" />
        <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
        <ImageBox>
          <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
        </ImageBox>
      </ImageContainer>
      <DetailWrapper>
        <DeleteModal />
      </DetailWrapper>
    </>
  );
};

export default MemoryDetailContainer;
