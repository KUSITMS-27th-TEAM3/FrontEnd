import * as S from './style/WriteFormStyle';

type TitleFormProps = {
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TitleForm = ({ title, handleTitleChange }: TitleFormProps) => {
  return (
    <div className="flexBoxCenter">
      <div className="write_title">제목</div>
      <S.TextBox height={'64px'} value={title} onChange={handleTitleChange} />
    </div>
  );
};

export default TitleForm;
