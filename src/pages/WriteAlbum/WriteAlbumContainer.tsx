import styled from 'styled-components';
import { FlexContainer, IconButton } from '../../components/CommonStyle';
import { useEffect, useState } from 'react';
import { WriteBox } from './components/style/WriteFormStyle';
import { ContentForm, EmotionForm, RadioForm, TitleForm, ImageUpload } from './components';
import { activeTagAtom, isUploadAtom } from '../../atom/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { postAlbum } from './WriteAlbumApi';

const WriteAlbumWrapper = styled(FlexContainer)``;

const WriteAlbumContainer = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);
  const [uploadImage, setUploadImage] = useState<string>('');
  const setIsUpload = useSetRecoilState(isUploadAtom);
  const [albumImages, setAlbumImages] = useState<File | null>(null);
  const emotionTagList = useRecoilValue(activeTagAtom);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleIsOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === 'open' ? setVisible(true) : setVisible(false);
  };

  const setImageFile = (file: File) => {
    if (!file) {
      alert('파일을 찾을 수 없습니다.');
      return;
    }
    setAlbumImages(file);
  };

  const handleUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sendData = {
      title,
      description,
      visible,
      emotionTagList,
    };

    const res = postAlbum(sendData, albumImages);

    if (!res) {
      alert('앨범을 업로드했습니다.');
    }
  };

  useEffect(() => {
    return () => setIsUpload(false);
  }, []);

  return (
    <WriteAlbumWrapper>
      <ImageUpload
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        setImageUpload={setImageFile}
      />
      <WriteBox>
        <TitleForm title={title} handleTitleChange={handleTitleChange} />
        <ContentForm description={description} handleContentChange={handleContentChange} />
        <EmotionForm />
        <RadioForm visible={visible} handleIsOpen={handleIsOpen} />
      </WriteBox>
      <IconButton width="5vw" height="30px" maxWidth="74px" minWidth="50px" onClick={handleUpload}>
        업로드
      </IconButton>
    </WriteAlbumWrapper>
  );
};

export default WriteAlbumContainer;
