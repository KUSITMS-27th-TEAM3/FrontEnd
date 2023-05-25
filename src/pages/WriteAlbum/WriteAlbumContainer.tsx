import styled from 'styled-components';
import { FlexContainer, IconButton } from '../../components/CommonStyle';
import { useEffect, useState } from 'react';
import { WriteBox } from './components/style/WriteFormStyle';
import { ContentForm, EmotionForm, RadioForm, TitleForm, ImageUpload } from './components';
import { activeTagAtom, isUploadAtom } from '../../atom/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { postAlbum, putAlbum } from './WriteAlbumApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { isAlbumDetail } from '../../type/AlbumType';

const WriteAlbumWrapper = styled(FlexContainer)`
  margin-bottom: 70px;
`;

const WriteAlbumContainer = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);
  const [uploadImage, setUploadImage] = useState<string>(''); // 업로드한 이미지(백그라운드로사용)
  const setIsUpload = useSetRecoilState(isUploadAtom);
  const [albumImages, setAlbumImages] = useState<File | null | string>(null); //사용자가 업로드한 이미지파일, 요청보냄
  const [emotionTagList, setEmotionTagList] = useRecoilState(activeTagAtom);
  const [imageUrlList, setImgUrlList] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const [isRevise, setIsRevise] = useState<boolean>(false);
  const detailInfo = { ...location?.state?.detailInfo };
  const albumId = useParams().id;

  console.log(detailInfo);

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

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const sendData = {
      title,
      description,
      visible,
      emotionTagList,
    };
    if (!isRevise) {
      const res = await postAlbum(sendData, albumImages);

      if (isAlbumDetail(res)) {
        alert('앨범을 업로드했습니다.');
        navigate('/memory/myAlbum');
      }
    } else {
      const res = await putAlbum(sendData, imageUrlList, albumId, albumImages);

      if (!res) {
        alert('앨범을 수정했습니다.');
        navigate('/memory/myAlbum');
      }
    }
  };

  useEffect(() => {
    if (detailInfo?.imageUrlList) {
      setTitle(detailInfo?.title);
      setDescription(detailInfo?.description);
      setVisible(detailInfo?.visible === 'PUBLIC' ? true : false);
      setUploadImage(detailInfo?.imageUrlList[0]); // 현재 화면에 보이는 이미지
      // setAlbumImages(detailInfo?.imageUrlList[0]); // 사용자가 올린 파일 or 수정전이미지
      setImgUrlList(detailInfo?.imageUrlList[0]); // 수정할때 이전 이미지
      setIsRevise(true);
    }
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
        <EmotionForm emotionTagList={detailInfo?.emotionTagList} />
        <RadioForm visible={visible} handleIsOpen={handleIsOpen} />
      </WriteBox>
      <IconButton width="5vw" height="30px" maxWidth="74px" minWidth="50px" onClick={handleUpload}>
        업로드
      </IconButton>
    </WriteAlbumWrapper>
  );
};

export default WriteAlbumContainer;
