import styled from 'styled-components';
import { FlexContainer, IconButton } from '../../../components/CommonStyle';
import ImageUpload from './components/ImageUpload';
import { EmotionTags } from '../components';

const WriteUploadContainer = styled(FlexContainer)``;

const WriteBox = styled.div`
  width: 80vw;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  .flexBoxCenter {
    display: flex;
    align-items: center;
    margin-top: 32px;
  }

  .flexBox {
    display: flex;
    margin-top: 32px;
    margin-bottom: 48px;
  }

  .flexBoxStart {
    display: flex;
    padding-bottom: 48px;
    margin-bottom: 72px;
    align-items: center;
    border-bottom: 2px solid #efefef;
  }

  .flexBoxEmotion {
    display: flex;
    align-items: center;
    padding-top: 43px;
    border-top: 2px solid #efefef;
    margin-bottom: 53px;
  }
  .write_title {
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 20px;
    margin-right: 82px;
  }

  .write_title .margin {
    margin-top: 22px;
  }

  .write_title_littleMargin {
    margin-right: 48px;
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
    font-size: 20px;
  }

  .write_content {
    font-family: ${({ theme }) => theme.font.family.pretendard_medium};
    font-size: 16px;
    color: ${({ theme }) => theme.color.grayScale.gray};
  }

  .checkbox {
    display: flex;
    align-items: center;
    height: 40px;
    margin-right: 24px;
  }

  @media screen and (max-width: 1024px) {
    .write_title {
      font-size: 16px;
      margin-right: 48px;
    }

    .write_title_littleMargin {
      font-size: 16px;
      margin-right: 23px;
    }
    .write_content {
      font-size: 14px;
    }
  }
`;

type TextBoxProps = {
  height: string;
};

const TextBox = styled.textarea<TextBoxProps>`
  all: unset;
  width: 70vw;
  background-color: ${({ theme }) => theme.color.grayScale.lightGray};
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  font-size: 16px;
  padding: 22px;
  height: ${(props) => props.height};
  box-sizing: border-box;
  line-height: 16px;

  &:focus {
    border: 1px solid #ffd3bf;
  }
`;

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid #666666;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: url('/img/check.svg');
    position: absolute;
    text-align: center;
    line-height: 30px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked {
    border: none;
  }

  &:checked::before {
    content: url('/img/checkwhite.svg');
    background-color: ${({ theme }) => theme.color.main.orange};
    line-height: 34px;
  }
`;

const WriteUpload = () => {
  return (
    <WriteUploadContainer>
      <ImageUpload />
      <WriteBox>
        <div className="flexBoxCenter">
          <div className="write_title">제목</div>
          <TextBox height={'64px'} />
        </div>
        <div className="flexBox">
          <div className="write_title margin">내용</div>
          <TextBox height={'385px'} />
        </div>
        <div className="flexBoxEmotion">
          <div className="write_title_littleMargin">감정태그</div>
          <EmotionTags width="70vw" fontSize={15} />
        </div>
        <div className="flexBoxStart">
          <div className="write_title_littleMargin">공개여부</div>
          <div className="checkbox">
            <CheckBox type="radio" name="check2" id="check2" value="2" />
            <label htmlFor="check2" className="write_content">
              공개
            </label>
          </div>
          <div className="checkbox">
            <CheckBox type="radio" name="check2" id="check2" value="2" />
            <label htmlFor="check2" className="write_content">
              비공개
            </label>
          </div>
        </div>
      </WriteBox>
      <IconButton width="5vw" height="30px" maxWidth="74px" minWidth="50px">
        업로드
      </IconButton>
    </WriteUploadContainer>
  );
};

export default WriteUpload;
