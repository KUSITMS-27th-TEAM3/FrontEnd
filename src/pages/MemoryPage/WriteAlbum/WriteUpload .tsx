import styled from 'styled-components';
import { FlexContainer, IconButton } from '../../../components/CommonStyle';
import { useState } from 'react';
import { WriteBox } from './components/style/WriteFormStyle';
import { ContentForm, EmotionForm, RadioForm, TitleForm, ImageUpload } from './components';

const WriteUploadContainer = styled(FlexContainer)``;

const WriteUpload = () => {
  const [title, setTitle] = useState<string>('제목을 입력해주세요.');
  const [content, setContent] = useState<string>('내용을 입력해주세요.');

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <WriteUploadContainer>
      <ImageUpload />
      <WriteBox>
        <TitleForm title={title} handleTitleChange={handleTitleChange} />
        <ContentForm content={content} handleContentChange={handleContentChange} />
        <EmotionForm />
        <RadioForm />
      </WriteBox>
      <IconButton width="5vw" height="30px" maxWidth="74px" minWidth="50px">
        업로드
      </IconButton>
    </WriteUploadContainer>
  );
};

export default WriteUpload;
