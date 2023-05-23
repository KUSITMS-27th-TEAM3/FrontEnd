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
