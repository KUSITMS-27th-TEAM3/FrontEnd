import styled from 'styled-components';
import ReplyComment from './ReplyComment';
import { useState } from 'react';
import InputForm from './InputForm';
import type { CommentType } from '../../../type/CommentType';
import { ContentButton } from './style/MemoryDetailStyle';

const CommentWrapper = styled.div`
  margin-top: 32px;
  display: flex;

  .commnetBox {
    width: 100%;
  }

  hr {
    margin: 16px 0px;
    background-color: #dddddd;
    height: 1px;
    border: 0;
  }
  .textAreaBox {
    display: flex;
    justify-content: space-between;
  }
  .commentBtnBox {
    display: flex;
  }
`;

const ReWriteBtn = styled.button`
  all: unset;
  width: 67px;
  height: 18px;
  color: ${({ theme }) => theme.color.grayScale.mediumBrightGray};
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  font-size: 14px;
  margin-top: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale.mediumBrightGray};
  cursor: pointer;
  text-align: center;
`;

const CommmetArea = styled.textarea`
  all: unset;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  padding: 10px;
`;

const CommentBtn = styled(ContentButton)`
  height: 15px;
  width: 50px;
`;

const ReplyCommentWrapper = styled.div``;

type CommentListProps = {
  comment: CommentType;
  albumId: string | undefined;
  accessUserProfileImageUrl: string | null;
  isSharedAlbum: boolean;
};

const CommentList = ({
  comment,
  albumId,
  accessUserProfileImageUrl,
  isSharedAlbum,
}: CommentListProps) => {
  const [showReply, setShowReply] = useState(false);

  const handleShowReply = () => {
    setShowReply(!showReply);
  };

  return (
    <CommentWrapper>
      <img
        src={comment.writerProfileImageUrl ? comment.writerProfileImageUrl : '/img/default.png'}
        alt="AlbumImg"
        className="profileImg"
      />
      <div className="commnetBox">
        <div className="userName">{comment.writer}</div>
        <div className="textAreaBox">
          <CommmetArea>{comment.description}</CommmetArea>
          <div className="commentBtnBox">
            <CommentBtn style={{ marginRight: '15px' }}>수정</CommentBtn>
            <CommentBtn>삭제</CommentBtn>
          </div>
        </div>
        <ReWriteBtn onClick={handleShowReply}>
          {showReply ? '대댓글 닫기' : '대댓글 보기'}
        </ReWriteBtn>
        {showReply && (
          <>
            <hr />
            <ReplyCommentWrapper>
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
            </ReplyCommentWrapper>
          </>
        )}
      </div>
    </CommentWrapper>
  );
};

export default CommentList;
