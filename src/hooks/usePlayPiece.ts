import { boardRows } from "config/const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));
const testPositiveDiagonalWin = (arr: number[][], player: number): boolean => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr[i].length - 1; j++) {
      if (i + 3 >= arr.length) return false

      if (arr[i][j] === player &&
        arr[i+1][j+1] === player &&
        arr[i+2][j+2] === player &&
        arr[i+3][j+3] === player
        ) {
          return true
      }
    }
  }

  return false
}

const testNegativeDiagonalWin = (arr: number[][], player: number): boolean => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr[i].length - 1; j >= 0 ; j--) {
      if (i - 3 < 0) return false
      
      if (arr[i][j] === player &&
        arr[i-1][j+1] === player &&
        arr[i-2][j+2] === player &&
        arr[i-3][j+3] === player
        ) {
          return true
      }
    }
  }

  return false
}

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;

    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row] || 0)) || // Did win horizontally
      testPositiveDiagonalWin(newBoard, player) || // Did win diagonally
      testNegativeDiagonalWin(newBoard, player)
    ) {
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
