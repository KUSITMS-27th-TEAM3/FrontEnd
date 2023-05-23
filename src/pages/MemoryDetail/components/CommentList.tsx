import styled from 'styled-components';
import ReplyComment from './ReplyComment';
import { useState } from 'react';
import InputForm from './InputForm';
import type { CommentType } from '../../../type/CommentType';

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

const ReplyCommentWrapper = styled.div``;

type CommentListProps = {
  comment: CommentType;
  albumId: string | undefined;
  accessUserProfileImageUrl: string | null;
};

const CommentList = ({ comment, albumId, accessUserProfileImageUrl }: CommentListProps) => {
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
        <div className="contentBox_content">{comment.description}</div>
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
              <InputForm
                albumId={albumId}
                commentId={comment.commentId}
                accessUserProfileImageUrl={accessUserProfileImageUrl}
              />
            </ReplyCommentWrapper>
          </>
        )}
      </div>
    </CommentWrapper>
  );
};

export default CommentList;
