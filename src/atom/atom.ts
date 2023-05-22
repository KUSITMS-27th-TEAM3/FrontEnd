import { atom } from 'recoil';

export const isUploadAtom = atom<boolean>({
  key: 'isUpload',
  default: false,
});

export const refetchQuestionsAtom = atom<boolean>({
  key: 'refetchQuestions',
  default: false,
});

export const sortOptionAtom = atom<string>({
  key: 'sortOption',
  default: 'DEFAULT',
});

export const activeTagAtom = atom<string[]>({
  key: 'emotionTag',
  default: [],
});

export const activeRegionTagAtom = atom<string[]>({
  key: 'regionTag',
  default: ['전체'],
});