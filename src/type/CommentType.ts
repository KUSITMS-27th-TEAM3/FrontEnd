export type CommentType = {
  commentId: number;
  description: string;
  writer: string;
  writerProfileImageUrl: string;
  child?: CommentType[];
};
