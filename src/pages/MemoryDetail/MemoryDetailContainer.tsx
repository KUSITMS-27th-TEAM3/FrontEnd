import styled from 'styled-components';
import { ImageContainer } from '../WriteAlbum/components/style/ImageUploadStyle';
import { isUploadAtom } from '../../atom/atom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { FlexContainer } from '../../components/CommonStyle';

const DetailBox = styled.div`
  position: relative;
`;

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

const ModalText = {
  text: '삭제하시겠습니까?',
  btnText1: '취소',
  btnText2: '삭제',
};

const MemoryDetailContainer = () => {
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);
  const [isModal, setModal] = useState<boolean>(true);

  useEffect(() => {
    setIsUpload(true);

    return () => setIsUpload(false);
  }, []);

  const firstBtnHandler = () => {
    setModal(false);
  };

  const secondBtnHandler = () => {
    console.log('second');
  };

  return (
    <DetailBox>
      <Modal
        ModalText={ModalText}
        isModal={isModal}
        firstBtnHandler={firstBtnHandler}
        SecondBtnHandler={secondBtnHandler}
      />
      <ImageContainer>
        <span className="img_filter" />
        <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
        <ImageBox>
          <img src={'/img/강아지사진.jpg'} alt="AlbumImg" />
        </ImageBox>
      </ImageContainer>
      <DetailWrapper></DetailWrapper>
    </DetailBox>
  );
};

export default MemoryDetailContainer;
