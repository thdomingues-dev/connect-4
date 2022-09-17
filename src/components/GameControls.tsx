import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  return (
    <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)} leftIcon={<RepeatIcon />}>
      Reset
    </Button>
  );
};

export default GameControls;
