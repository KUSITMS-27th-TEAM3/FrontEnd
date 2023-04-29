import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as API from '../api/API';

type PostComment = {
  shopId: number;
  comment: string;
  rating: number;
};

const postComment = async (comment: PostComment) => {
  return await API.post('/api/comments', comment);
};

type UseCreateComment = {
  onSuccessCb: () => void;
  onErrorCb: () => void;
  shopId: number | undefined;
};

export const useCreateComment = ({ onSuccessCb, onErrorCb, shopId }: UseCreateComment) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', shopId]);
      onSuccessCb();
    },
    onError: () => {
      onErrorCb();
    },
  });

  return { mutation };
};
