import * as S from './style/WriteFormStyle';

type ContentFormProps = {
  description: string;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ContentForm = ({ description, handleContentChange }: ContentFormProps) => {
  return (
    <div className="flexBox">
      <div className="write_title margin">내용</div>
      <S.TextBox
        height={'385px'}
        value={description}
        onChange={handleContentChange}
        placeholder="내용을 입력해주세요"
      />
    </div>
  );
};

export default ContentForm;
