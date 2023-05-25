import { useEffect, useRef, useState } from 'react';
import { postAnswer, putAnswer } from '../QuestionAlbumApi';
import * as S from './style/QuestionWriteFormStyle';
import { DeleteIcon, ReviseIcon } from '../../../../components/Icons/Index';
import { refetchAtom } from '../../../../atom/atom';
import { useRecoilState } from 'recoil';

type QuestionWriteFormProps = {
  answerDescription?: string;
  questionId: number;
};

const QuestionWriteForm = ({ answerDescription, questionId }: QuestionWriteFormProps) => {
  const [textValue, setTextValue] = useState<string>('');
  const [canRevise, setCanRevise] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [refetch, setRefetch] = useRecoilState<boolean>(refetchAtom);

  const handleRevise = () => {
    setCanRevise(true);
    textAreaRef.current?.focus();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleDelete = () => {
    setTextValue('');
  };

  const handleWrite = async () => {
    const answer = { answerDescription: textValue };
    setCanRevise(false);
    if (answerDescription || answerDescription === '') await putAnswer(answer, questionId);
    else {
      await postAnswer(answer, questionId);
    }
    setRefetch(true);
  };

  useEffect(() => {
    if (!answerDescription) return;
    setTextValue(answerDescription);
  }, [answerDescription]);

  useEffect(() => {
    if (canRevise) {
      textAreaRef.current?.focus();
    }
  }, [canRevise]);

  return (
    <S.FormContainer>
      <S.TextForm
        value={textValue}
        disabled={!canRevise}
        onChange={handleTextChange}
        ref={textAreaRef}
        placeholder="내용을 입력하세요."
      />
      <div className="Form_buttons">
        <div className="buttonbox">
          <S.FormButton onClick={handleRevise}>
            <div>수정</div>
            <ReviseIcon />
          </S.FormButton>
          <S.FormButton onClick={handleDelete}>
            <div>삭제</div>
            <DeleteIcon />
          </S.FormButton>
        </div>
        <S.FormButton onClick={handleWrite}>
          <div>입력</div>
          <img src="/img/write.svg" alt="write" />
        </S.FormButton>
      </div>
    </S.FormContainer>
  );
};

export default QuestionWriteForm;
