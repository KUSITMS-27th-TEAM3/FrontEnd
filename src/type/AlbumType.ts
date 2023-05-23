export type AlbumContent = {
  albumId: number;
  imageUrl: string;
  commentCount: number;
  empathyCount: number;
  title: string;
};

export type AlbumDetail = {
  changeable: boolean;
  description: string;
  emotionTagList: string[];
  imageUrlList: string[] | never[];
  petName: string;
  title: string;
  visibility: string;
  writer: string;
  writerProfileImageUrl: string | null;
  accessUserProfileImageUrl: string | null;
};

export const isAlbumDetail = (arg: any): arg is AlbumDetail => {
  return arg.imageUrlList !== undefined;
};

export const initialDetail = {
  changeable: false,
  commentCount: 1,
  description: '',
  emotionTagList: [],
  empathyCount: 1,
  imageUrlList: ['string'],
  petName: '',
  title: '',
  visibility: 'PUBLIC',
  writer: '',
  writerProfileImageUrl: null,
  accessUserProfileImageUrl: null,
};
