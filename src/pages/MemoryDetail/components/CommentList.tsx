import styled from 'styled-components';
import ReplyComment from './ReplyComment';
import { useState } from 'react';
import InputForm from './InputForm';

const CommentWrapper = styled.div`
  margin-top: 32px;
  display: flex;

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
  name: string;
  content: string;
};

const tempReply = {
  name: '이수빈',
  content:
    '득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다득근합시다.',
};

const tempReplyArr = [tempReply, tempReply, tempReply];

const CommentList = ({ name, content }: CommentListProps) => {
  const [showReply, setShowReply] = useState(false);

  const handleShowReply = () => {
    setShowReply(!showReply);
  };

  return (
    <CommentWrapper>
      <img src={'/img/강아지사진.jpg'} alt="AlbumImg" className="profileImg" />
      <div>
        <div className="userName">{name}</div>
        <div className="contentBox_content">{content}</div>
        <ReWriteBtn onClick={handleShowReply}>
          {showReply ? '대댓글 닫기' : '대댓글 보기'}
        </ReWriteBtn>
        {showReply && (
          <>
            <hr />
            <ReplyCommentWrapper>
              {tempReplyArr.map(({ name, content }) => (
                <ReplyComment name={name} content={content} />
              ))}
              <InputForm />
            </ReplyCommentWrapper>
          </>
        )}
      </div>
    </CommentWrapper>
  );
};

export default CommentList;
