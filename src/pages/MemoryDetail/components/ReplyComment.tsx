import styled from 'styled-components';
import type { CommentType } from '../../../type/CommentType';

const ReplyCommentBox = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

type ReplyCommentProps = {
  comment: CommentType;
};

const ReplyComment = ({ comment }: ReplyCommentProps) => {
  return (
    <ReplyCommentBox>
      <img src={comment.writerProfileImageUrl} alt="AlbumImg" className="profileImg" />
      <div>
        <div className="userName">{comment.writer}</div>
        <div className="contentBox_content">{comment.description}</div>
      </div>
    </ReplyCommentBox>
  );
};

export default ReplyComment;
