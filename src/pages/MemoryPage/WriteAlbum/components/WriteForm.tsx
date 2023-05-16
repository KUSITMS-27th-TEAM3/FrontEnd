import { EmotionTags } from '../../components';
import * as S from './style/WriteFormStyle';

type WriteFormProps = {
  title: string;
  content: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const WriteForm = ({ title, content, handleTitleChange, handleContentChange }: WriteFormProps) => {
  return (
    <S.WriteBox>
      <div className="flexBoxCenter">
        <div className="write_title">제목</div>
        <S.TextBox height={'64px'} value={title} onChange={handleTitleChange} />
      </div>
      <div className="flexBox">
        <div className="write_title margin">내용</div>
        <S.TextBox height={'385px'} value={content} onChange={handleContentChange} />
      </div>
      <div className="flexBoxEmotion">
        <div className="write_title littleMargin">감정태그</div>
        <EmotionTags width="70vw" fontSize={15} />
      </div>
      <div className="flexBoxStart">
        <div className="write_title littleMargin">공개여부</div>
        <div className="checkbox">
          <S.CheckBox type="radio" name="check2" id="check2" value="2" />
          <label htmlFor="check2" className="write_content">
            공개
          </label>
        </div>
        <div className="checkbox">
          <S.CheckBox type="radio" name="check2" id="check2" value="2" />
          <label htmlFor="check2" className="write_content">
            비공개
          </label>
        </div>
      </div>
    </S.WriteBox>
  );
};

export default WriteForm;
