import * as API from '../../api/API';

type postAlbumParams = {
  title: string;
  description: string;
  visible: boolean;
  emotionTagList: string[];
};

export const postAlbum = async (
  { title, description, visible, emotionTagList }: postAlbumParams,
  albumImages: File | null,
) => {
  const formData = new FormData();
  const visibility = visible ? 'PUBLIC' : 'PRIVATE';

  console.log('albumImage', albumImages, albumImages?.name);
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

  return await API.post('/album', formData, 'imgPost');
};
