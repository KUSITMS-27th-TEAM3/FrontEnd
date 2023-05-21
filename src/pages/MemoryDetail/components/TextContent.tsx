import { useState } from 'react';
import { FormButton } from '../../../components/CommonStyle';
import { CommentIcon, DeleteIcon, DogFootIcon, ReviseIcon } from '../../../components/Icons/Index';
import * as S from './style/MemoryDetailStyle';

const TextContent = () => {
  const [tags, setTags] = useState<string[]>(['아늑함', '행복함']);

  return (
    <>
      <S.FlexBox>
        <img src={'/img/강아지사진.jpg'} alt="AlbumImg" className="profileImg" />
        <div>
          <div className="userName">오태석</div>
          <div className="subName">렉스</div>
        </div>
      </S.FlexBox>
      <S.FlexBox>
        {tags.map((tag, idx) => (
          <S.Tag>{tag}</S.Tag>
        ))}
      </S.FlexBox>
      <S.TitleBox>
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
      </S.TitleBox>
      <S.ContentBox>
        <div className="contentBox_content">
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </div>
        <div className="buttonBox">
          <S.ContentButton style={{ marginRight: '15px' }}>
            <div>1234</div>
            <DogFootIcon />
          </S.ContentButton>
          <S.ContentButton>
            <div>1234</div>
            <CommentIcon />
          </S.ContentButton>
        </div>
      </S.ContentBox>
    </>
  );
};

export default TextContent;
