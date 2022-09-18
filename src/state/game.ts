import { boardCols } from "config/const";
import { atom } from "recoil";
import { Board, Player, PlayerName, PlayerColor } from "types";

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

export const playerNameState = atom<PlayerName>({
  key: "playerNameState",
  default: {
    1: "Red",
    2: "Yellow",
  },
  effects: [
    localStorageEffect('playerNameState')
  ]
});

export const playerColorState = atom<PlayerColor>({
  key: "playerColorState",
  default: {
    1: '#FC8181',
    2: '#FAF089',
  },
  effects: [
    localStorageEffect('playerColorState')
  ]
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
  effects: [
    localStorageEffect('gameOverState')
  ]
});
