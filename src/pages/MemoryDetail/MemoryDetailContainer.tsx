import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import * as S from './components/style/MemoryDetailStyle';
import { CommentList, ImageContent, InputForm, TextContent } from './components';

const ModalText = {
  text: '삭제하시겠습니까?',
  btnText1: '취소',
  btnText2: '삭제',
};

const tempContent = {
  name: '오태석',
  content:
    '강아지랑 여행가는 거 너무 좋죠.. 저도 더 많이 같이 갈 걸 후회되기도 하더라구요 그래서 그런지 가끔 갔던 여행에서 찍은 사진 보면 저도 정말 행복해집니당 ㅎ 반려동물 키우는 친구가 주변에 많은데 여행 많이 많이 가보라고 얘기해주고 있어요 같이 여행가는 것도 좋은데 거기서 같이 물놀이까지 하면 강아지도 좋아하고 더 재밌게 놀 수 있는 것 같아요 강릉에 함께할 수 있는 좋은 펜션 많은데 혹시 지금 키우고 계신 분들이 있다면 꼭 가보세용',
};

const tempArr = [tempContent, tempContent, tempContent, tempContent, tempContent];

const MemoryDetailContainer = () => {
  const [isModal, setModal] = useState<boolean>(false);

  const firstBtnHandler = () => {
    setModal(false);
  };

  const secondBtnHandler = () => {
    console.log('second');
  };

  return (
    <S.DetailBox>
      <Modal
        ModalText={ModalText}
        isModal={isModal}
        firstBtnHandler={firstBtnHandler}
        SecondBtnHandler={secondBtnHandler}
      />
      <ImageContent />
      <S.DetailWrapper>
        <TextContent />
        <InputForm />
        <S.CommentBox>
          {tempArr.map(({ name, content }) => (
            <CommentList name={name} content={content} />
          ))}
        </S.CommentBox>
      </S.DetailWrapper>
    </S.DetailBox>
  );
};

export default MemoryDetailContainer;
