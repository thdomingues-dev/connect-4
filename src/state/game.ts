import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player } from "types";

interface AtomEffect { 
  setSelf: (args: any) => void
  onSet: (args: any) => void
};

const localStorageEffect = (key: string) => ({setSelf, onSet}: AtomEffect) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: any, _:any, isReset: boolean) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [
    localStorageEffect('boardState')
  ],
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});
