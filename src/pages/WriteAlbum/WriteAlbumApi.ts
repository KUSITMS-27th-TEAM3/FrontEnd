import * as API from '../../api/API';

type postAlbumParams = {
  title: string;
  description: string;
  visible: boolean;
  emotionTagList: string[];
};

const checkedParams = (title: string, emotionTagList: string[], description: string) => {
  if (emotionTagList.length === 0) {
    alert('감정태그를 선택해주세요');
    return false;
  }
  if (!title) {
    alert('제목을 입력해주세요.');
    return false;
  }
  if (!description) {
    alert('내용을 입력해주세요.');
    return false;
  }
  return true;
};

export const postAlbum = async (
  { title, description, visible, emotionTagList }: postAlbumParams,
  albumImages: File | null | string,
  albumId?: string,
) => {
  const checked = checkedParams(title, emotionTagList, description);

  if (!checked) {
    return;
  }

  const formData = new FormData();
  const visibility = visible ? 'PUBLIC' : 'PRIVATE';

  console.log('title', title);
  console.log('description', description);
  console.log('visibility', visibility);
  console.log('albumImage', albumImages);
  console.log(emotionTagList);

  formData.append('title', title);
  formData.append('description', description);
  formData.append('visibility', visibility);
  emotionTagList.forEach((tag) => {
    formData.append('emotionTags', tag);
  });

  if (albumImages) {
    formData.append('albumImages', albumImages);
  }

  if (albumId) {
    return await API.post(`album/${albumId}`, formData, 'imgPost');
  }

  return await API.post('/album', formData, 'imgPost');
};

export const putAlbum = async (
  { title, description, visible, emotionTagList }: postAlbumParams,
  imageUrlList: string,
  albumId: string | undefined,
  albumImages: File | null | string,
) => {
  const checked = checkedParams(title, emotionTagList, description);

  if (!checked) {
    return;
  }

  const formData = new FormData();
  const visibility = visible ? 'PUBLIC' : 'PRIVATE';

  console.log('title', title);
  console.log('description', description);
  console.log('visibility', visibility);
  console.log('albumImage', albumImages);
  console.log('imageUrlList', imageUrlList);
  console.log(emotionTagList);

  formData.append('title', title);
  formData.append('description', description);
  formData.append('visibility', visibility);
  emotionTagList.forEach((tag) => {
    formData.append('emotionTagList', tag);
  });

  if (albumImages) {
    formData.append('addImageList', albumImages);
  } else {
    formData.append('imageUrlList', imageUrlList);
  }

  return await API.post(`album/${albumId}`, formData, 'imgPost');
};
