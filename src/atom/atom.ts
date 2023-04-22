import { atom } from 'recoil';

export type MemoState = {
  value: string;
  id: string;
};

export const memoState = atom<MemoState[]>({
  key: 'memo',
  default: [],
});
