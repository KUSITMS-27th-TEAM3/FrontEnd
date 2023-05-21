import styled from 'styled-components';

const ReplyCommentBox = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

type ReplyCommentProps = {
  name: string;
  content: string;
};

const ReplyComment = ({ name, content }: ReplyCommentProps) => {
  return (
    <ReplyCommentBox>
      <img src={'/img/강아지사진.jpg'} alt="AlbumImg" className="profileImg" />
      <div>
        <div className="userName">{name}</div>
        <div className="contentBox_content">{content}</div>
      </div>
    </ReplyCommentBox>
  );
};

export default ReplyComment;
