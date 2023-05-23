import * as API from '../../api/API';

type NullableString = string | undefined;

export const getDetailAlbum = async (albumId: NullableString) => {
  return await API.get(`/album/${albumId}`);
};

export const getDetailComments = async (albumId: NullableString) => {
  return await API.get(`/album/${albumId}/comment`);
};

export const postComment = async (albumId: NullableString, description: string) => {
  return await API.post(`/album/${albumId}/comment`, description);
};

export const postCommentReply = async (
  albumId: NullableString,
  commentId: number,
  description: string,
) => {
  return await API.post(`/album/${albumId}/comment/${commentId}`, description);
};

export const postEmpathy = async (albumId: NullableString) => {
  return await API.get(`/album/${albumId}/empathy`);
};

export const deleteAlbum = async (albumId: NullableString) => {
  return await API.delete(`/album/${albumId}`);
};

export const getEmpathy = async (albumId: NullableString) => {
  return await API.get(`/album/${albumId}/empathy/count`);
};

export const getComment = async (albumId: NullableString) => {
  return await API.get(`/album/${albumId}/comment/count`);
};

export const putComment = async (
  albumId: NullableString,
  commentId: number,
  description: string,
) => {
  return await API.put(`/album/${albumId}/comment/${commentId}`, description);
};

export const deleteComment = async (albumId: NullableString, commentId: number) => {
  return await API.delete(`/album/${albumId}/comment/${commentId}`);
};
