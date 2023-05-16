import * as S from './style/WriteFormStyle';

const RadioForm = () => {
  return (
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
  );
};

export default RadioForm;
