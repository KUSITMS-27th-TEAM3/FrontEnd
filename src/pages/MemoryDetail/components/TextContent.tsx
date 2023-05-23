import { useEffect, useState } from 'react';
import { FormButton } from '../../../components/CommonStyle';
import { CommentIcon, DeleteIcon, DogFootIcon, ReviseIcon } from '../../../components/Icons/Index';
import * as S from './style/MemoryDetailStyle';
import { AlbumDetail } from '../../../type/AlbumType';
import { mappingTag } from '../../../util/util';
import { useRecoilState } from 'recoil';
import { refetchAtom } from '../../../atom/atom';
import { postEmpathy } from '../MemoryDetailApi';

type TextContentProps = {
  handleRevise: () => void;
  handleDelete: () => void;
  detailInfo: AlbumDetail;
  albumId: string | undefined;
};

const TextContent = ({ handleRevise, handleDelete, detailInfo, albumId }: TextContentProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [empathyCount, setEmpathyCount] = useState<number>(0);
  const [refetch, setRefetch] = useRecoilState<boolean>(refetchAtom);

  useEffect(() => {
    const newTags = mappingTag(detailInfo.emotionTagList);
    setTags(newTags);
    setCommentCount(detailInfo.commentCount);
    setEmpathyCount(detailInfo.empathyCount);
  }, [detailInfo]);

  useEffect(() => {
    if (refetch) {
      setCommentCount((prev) => prev + 1);
    }
  }, [refetch]);

  const handleEmpathyClick = async () => {
    const res = await postEmpathy(albumId);

    console.log('res', res);
    if (!res) {
      setEmpathyCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <S.FlexBox>
        <img
          src={
            detailInfo.writerProfileImageUrl ? detailInfo.writerProfileImageUrl : '/img/default.png'
          }
          alt="AlbumImg"
          className="profileImg"
        />
        <div>
          <div className="userName">{detailInfo.writer}</div>
          <div className="subName">{detailInfo.petName}</div>
        </div>
      </S.FlexBox>
      <S.FlexBox>
        {tags.map((tag, idx) => (
          <S.Tag key={tag}>{tag}</S.Tag>
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
          <S.ContentButton style={{ marginRight: '15px' }} onClick={handleEmpathyClick}>
            <div>{empathyCount}</div>
            <DogFootIcon />
          </S.ContentButton>
          <S.ContentButton>
            <div>{commentCount}</div>
            <CommentIcon />
          </S.ContentButton>
        </div>
      </S.ContentBox>
    </>
  );
};

export default TextContent;
