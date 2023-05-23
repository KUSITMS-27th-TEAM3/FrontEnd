export type CommentType = {
  commentId: number;
  description: string;
  writer: string;
  writerProfileImageUrl: string;
  child?: CommentType[];
};

export const isCommentType = (arg: any): arg is CommentType => {
  return arg.commentId !== undefined && arg.description !== undefined;
};
