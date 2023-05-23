export type AlbumContent = {
  albumId: number;
  imageUrl: string;
  commentCount: number;
  empathyCount: number;
  title: string;
};

export type AlbumDetail = {
  changeable: boolean;
  commentCount: number;
  description: string;
  emotionTagList: string[];
  empathyCount: number;
  imageUrlList: string[];
  petName: string;
  title: string;
  visibility: 'PUBLIC' | 'PRIVATE';
  writer: string;
  writerProfileImageUrl: string;
};

export const isAlbumDetail = (arg: any): arg is AlbumDetail => {
  return arg.imageUrlList !== undefined;
};
