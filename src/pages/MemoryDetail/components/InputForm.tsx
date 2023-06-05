import { useState } from 'react';
import { postComment, postCommentReply } from '../MemoryDetailApi';
import { isCommentType } from '../../../type/CommentType';
import { useRecoilState } from 'recoil';
import { refetchAtom } from '../../../atom/atom';
import * as S from './style/CommentListStyle';

type InputFormProps = {
  albumId: string | undefined;
  accessUserProfileImageUrl: string | null;
  commentId?: number;
};

const InputForm = ({ albumId, commentId, accessUserProfileImageUrl }: InputFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [refetch, setRefetch] = useRecoilState<boolean>(refetchAtom);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      alert('댓글을 입력해주세요.');
      return;
    }

    let res;
    if (!commentId) {
      res = await postComment(albumId, inputValue);
    } else {
      res = await postCommentReply(albumId, commentId, inputValue);
    }

    if (isCommentType(res)) {
      setInputValue('');
      setRefetch(true);
      alert('댓글이 입력되었습니다.');
    }
  };

  return (
    <S.InputBox onSubmit={handleSubmit}>
      <img
        src={accessUserProfileImageUrl ? accessUserProfileImageUrl : '/img/default.png'}
        alt="AlbumImg"
        className="profileImg"
      />
      <S.CommentInput
        placeholder="댓글을 입력해주세요."
        value={inputValue}
        onChange={handleInputChange}
      />
    </S.InputBox>
  );
};

export default InputForm;
