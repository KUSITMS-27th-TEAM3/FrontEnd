import { useEffect, useState } from 'react';
import { FormButton } from '../../../components/CommonStyle';
import { CommentIcon, DeleteIcon, DogFootIcon, ReviseIcon } from '../../../components/Icons/Index';
import * as S from './style/MemoryDetailStyle';
import { AlbumDetail } from '../../../type/AlbumType';

type TextContentProps = {
  handleRevise: () => void;
  handleDelete: () => void;
  detailInfo: AlbumDetail;
};

const TextContent = ({ handleRevise, handleDelete, detailInfo }: TextContentProps) => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(detailInfo.emotionTagList);
  }, []);

  return (
    <>
      <S.FlexBox>
        <img src={detailInfo.writerProfileImageUrl} alt="AlbumImg" className="profileImg" />
        <div>
          <div className="userName">{detailInfo.writer}</div>
          <div className="subName">{detailInfo.petName}</div>
        </div>
      </S.FlexBox>
      <S.FlexBox>
        {tags.map((tag, idx) => (
          <S.Tag>{tag}</S.Tag>
        ))}
      </S.FlexBox>
      <S.TitleBox>
        <div className="title">{detailInfo.title}</div>
        {detailInfo.changeable ? (
          <div className="buttonBox">
            <FormButton style={{ marginRight: '15px' }} onClick={handleRevise}>
              <div>수정</div>
              <ReviseIcon />
            </FormButton>
            <FormButton onClick={handleDelete}>
              <div>삭제</div>
              <DeleteIcon />
            </FormButton>
          </div>
        ) : null}
      </S.TitleBox>
      <S.ContentBox>
        <div className="contentBox_content">{detailInfo.description}</div>
        <div className="buttonBox">
          <S.ContentButton style={{ marginRight: '15px' }}>
            <div>{detailInfo.empathyCount}</div>
            <DogFootIcon />
          </S.ContentButton>
          <S.ContentButton>
            <div>{detailInfo.commentCount}</div>
            <CommentIcon />
          </S.ContentButton>
        </div>
      </S.ContentBox>
    </>
  );
};

export default TextContent;
