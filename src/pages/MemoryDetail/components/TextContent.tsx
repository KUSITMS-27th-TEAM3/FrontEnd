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
  handleAlbumDelete: () => void;
  detailInfo: AlbumDetail;
  albumId: string | undefined;
  empathy: number;
  comment: number;
  isCheckedEmpathy: boolean;
  setIsCheckedEmpathy: React.Dispatch<React.SetStateAction<boolean>>;
};

const TextContent = ({
  handleRevise,
  handleAlbumDelete,
  detailInfo,
  albumId,
  empathy,
  comment,
  isCheckedEmpathy,
  setIsCheckedEmpathy,
}: TextContentProps) => {
  const [tags, setTags] = useState<string[]>([]);
  // const [commentCount, setCommentCount] = useState<number>(comment);
  const [empathyCount, setEmpathyCount] = useState<number>(empathy);
  const [refetch, setRefetch] = useRecoilState<boolean>(refetchAtom);

  useEffect(() => {
    const newTags = mappingTag(detailInfo.emotionTagList);
    setTags(newTags);
  }, [detailInfo]);

  useEffect(() => {
    setEmpathyCount(empathy);
  }, [empathy]);

  // useEffect(() => {
  //   setCommentCount(comment);
  // }, [comment]);

  // useEffect(() => {
  //   if (refetch) {
  //     setCommentCount((prev) => prev + 1);
  //   }
  // }, [refetch]);

  const handleEmpathyClick = async () => {
    const res = await postEmpathy(albumId);

    console.log('res', res);
    if (!res) {
      if (isCheckedEmpathy) {
        setEmpathyCount((prev) => prev - 1);
        setIsCheckedEmpathy(!isCheckedEmpathy);
      } else {
        setEmpathyCount((prev) => prev + 1);
        setIsCheckedEmpathy(!isCheckedEmpathy);
      }
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
            <FormButton onClick={handleAlbumDelete}>
              <div>삭제</div>
              <DeleteIcon />
            </FormButton>
          </div>
        ) : null}
      </S.TitleBox>
      <S.ContentBox>
        <div className="contentBox_content">{detailInfo.description}</div>
        <div className="buttonBox">
          <S.ContentButton
            style={{ marginRight: '15px' }}
            onClick={handleEmpathyClick}
            className={isCheckedEmpathy ? 'active' : ''}
          >
            <div>{empathyCount}</div>
            <DogFootIcon />
          </S.ContentButton>
          <S.ContentButton>
            <div>{comment}</div>
            <CommentIcon />
          </S.ContentButton>
        </div>
      </S.ContentBox>
    </>
  );
};

export default TextContent;
