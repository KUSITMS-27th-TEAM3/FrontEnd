import * as API from '../../api/API';

export const getDetailAlbum = async (albumId: string | undefined) => {
  return await API.get(`/album/${albumId}`);
};

export const getDetailComments = async (albumId: string | undefined) => {
  return await API.get(`/album/${albumId}/comment`);
};
