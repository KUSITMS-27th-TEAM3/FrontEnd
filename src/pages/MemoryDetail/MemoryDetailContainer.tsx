import styled from 'styled-components';
import { ImageContainer } from '../WriteAlbum/components/style/ImageUploadStyle';
import { isUploadAtom } from '../../atom/atom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { FormButton } from '../../components/CommonStyle';
import DeleteIcon from '../../components/Icons/DeleteIcon';
import ReviseIcon from '../../components/Icons/ReviseIcon';
import DogFootIcon from '../../components/Icons/DogFootIcon';
import CommentIcon from '../../components/Icons/CommentIcon';

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

const DetailWrapper = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 100px 10vw 5vw 10vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  .profileImg {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 18px;
  }

  .fullContentBox {
    display: flex;
    align-items: center;
  }

  .userName {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 18px;
    margin-bottom: 4px;
  }

  .subName {
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    font-size: 16px;
    color: ${({ theme }) => theme.color.grayScale.gray};
  }

  .tagBox {
    margin-top: 20px;
  }

  .titleBox {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
  }

  .title {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 26px;
  }

  .buttonBox {
    display: flex;
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    font-size: 16px;
  }

  .contentBox {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  }

  .contentBox_content {
    width: 75%;
  }
`;

const Tag = styled.span`
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.main.orange};
  background-color: #ffefe2;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.pretendard_bold};
  font-size: 14px;
  margin-right: 12px;
`;

const ContentButton = styled.button`
  all: unset;
  border: 1px solid #ffd3bf;
  color: ${({ theme }) => theme.color.main.orange};
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 68px;
`;

const ModalText = {
  text: '삭제하시겠습니까?',
  btnText1: '취소',
  btnText2: '삭제',
};

const MemoryDetailContainer = () => {
  const [isUpload, setIsUpload] = useRecoilState(isUploadAtom);
  const [isModal, setModal] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>(['아늑함', '행복함']);

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
      <DetailWrapper>
        <div className="fullContentBox">
          <img src={'/img/강아지사진.jpg'} alt="AlbumImg" className="profileImg" />
          <div>
            <div className="userName">오태석</div>
            <div className="subName">렉스</div>
          </div>
        </div>
        <div className="tagBox">
          {tags.map((tag, idx) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <div className="titleBox">
          <div className="title">우리강아지와 강원도 가서 찍은 사진!</div>
          <div className="buttonBox">
            <FormButton style={{ marginRight: '15px' }}>
              <div>수정</div>
              <ReviseIcon />
            </FormButton>
            <FormButton>
              <div>삭제</div>
              <DeleteIcon />
            </FormButton>
          </div>
        </div>
        <div className="contentBox">
          <div className="contentBox_content">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          </div>
          <div className="buttonBox">
            <ContentButton style={{ marginRight: '15px' }}>
              <div>1234</div>
              <DogFootIcon />
            </ContentButton>
            <ContentButton>
              <div>1234</div>
              <CommentIcon />
            </ContentButton>
          </div>
        </div>
      </DetailWrapper>
    </DetailBox>
  );
};

export default MemoryDetailContainer;
