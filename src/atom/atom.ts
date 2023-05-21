import { atom } from 'recoil';

export const isUploadAtom = atom<boolean>({
  key: 'isUpload',
  default: false,
});

export const refetchQuestionsAtom = atom<boolean>({
  key: 'refetchQuestions',
  default: false,
});
