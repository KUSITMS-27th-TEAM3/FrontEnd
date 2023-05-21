import styled from 'styled-components';
import { useState } from 'react';

const InputBox = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  all: unset;
  height: 20px;
  width: 100%;
  border-radius: 8px;
  padding: 18px 16px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  background-color: ${({ theme }) => theme.color.grayScale.lightGray};
`;

type InputFormProps = {};

const InputForm = ({}: InputFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <InputBox onSubmit={handleSubmit}>
      <img src={'/img/강아지사진.jpg'} alt="AlbumImg" className="profileImg" />
      <CommentInput
        placeholder="댓글을 입력해주세요."
        value={inputValue}
        onChange={handleInputChange}
      />
    </InputBox>
  );
};

export default InputForm;
