import ReplyComment from './ReplyComment';
import { useEffect, useRef, useState } from 'react';
import InputForm from './InputForm';
import type { CommentType } from '../../../type/CommentType';
import { putComment } from '../MemoryDetailApi';
import { isCommentType } from '../../../type/CommentType';
import * as S from './style/CommentListStyle';

type CommentListProps = {
  comment: CommentType;
  albumId: string | undefined;
  accessUserProfileImageUrl: string | null;
  isSharedAlbum: boolean;
  handleCommentDelete: (commentId: number) => void;
};

const CommentList = ({
  comment,
  albumId,
  accessUserProfileImageUrl,
  isSharedAlbum,
  handleCommentDelete,
}: CommentListProps) => {
  const [showReply, setShowReply] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [canRevise, setCanRevise] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');

  const handleShowReply = () => {
    setShowReply(!showReply);
  };

  const handleRevise = async () => {
    if (!canRevise) {
      setCanRevise(true);
      textAreaRef.current?.focus();
      return;
    } else {
      const res = await putComment(albumId, comment.commentId, textValue);
      console.log('REs', res);
      setCanRevise(false);
      if (isCommentType(res)) {
        alert('수정되었습니다.');
      }
    }
  };

  const handleDelete = () => {
    handleCommentDelete(comment.commentId);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    setTextValue(comment.description);
  }, [comment]);

  return (
    <S.CommentWrapper>
      <img
        src={comment.writerProfileImageUrl ? comment.writerProfileImageUrl : '/img/default.png'}
        alt="AlbumImg"
        className="profileImg"
      />
      <div className="commnetBox">
        <div className="userName">{comment.writer}</div>
        <div className="textAreaBox">
          <S.CommmetArea
            disabled={!canRevise}
            value={textValue}
            ref={textAreaRef}
            onChange={handleTextChange}
            className={canRevise ? 'active' : ''}
          />
          {comment.changeable && (
            <div className="commentBtnBox">
              <S.CommentBtn style={{ marginRight: '15px' }} onClick={handleRevise}>
                수정
              </S.CommentBtn>
              <S.CommentBtn onClick={handleDelete}>삭제</S.CommentBtn>
            </div>
          )}
        </div>
        <S.ReWriteBtn onClick={handleShowReply}>
          {showReply ? '대댓글 닫기' : '대댓글 보기'}
        </S.ReWriteBtn>
        {showReply && (
          <>
            <hr />
            <S.ReplyCommentWrapper>
              {comment.child ? (
                comment.child.map((children) => (
                  <ReplyComment comment={children} key={children.commentId} />
                ))
              ) : (
                <div className="nocontent">댓글이 없습니다.</div>
              )}
              {isSharedAlbum ? (
                <InputForm
                  albumId={albumId}
                  commentId={comment.commentId}
                  accessUserProfileImageUrl={accessUserProfileImageUrl}
                />
              ) : null}
            </S.ReplyCommentWrapper>
          </>
        )}
      </div>
    </S.CommentWrapper>
  );
};

export default CommentList;
