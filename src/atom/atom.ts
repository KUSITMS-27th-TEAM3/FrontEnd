import { atom } from 'recoil';

export const isUploadAtom = atom<boolean>({
  key: 'isUpload',
  default: false,
});
