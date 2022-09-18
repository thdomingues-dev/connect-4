import { Circle, Flex } from "@chakra-ui/react";
import { boardRows, playerColor } from "config/const";
import { usePlayPiece } from "hooks";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { boardState, gameOverState, playerState } from "state";
import { Player } from "types";

const padCol = (col: number[]): number[] =>
  col.join("").padEnd(boardRows, "0").split("").map(Number);

const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);

  return (
    <Flex justify="center" shadow='lg' borderRadius='md' px='5' pb='5'>
      {board.map((col, i) => (
        <Flex
          key={i}
          role="group"
          onClick={() => play(i)}
          flexDirection="column-reverse"
          cursor={gameOver ? "auto" : "pointer"}
        >
          {padCol(col).map((p, j) => (
            <Circle
              m={1}
              size={{ base: '30px', sm: '35px', md: '40px', lg: '45px'}}
              key={`${i}-${j}`}
              boxShadow="inner"
              bg={playerColor[p as Player] || "gray.300"}
            />
          ))}
          <Circle
            m={1}
            size={{ base: '30px', sm: '35px', md: '40px', lg: '45px'}}
            boxShadow="base"
            visibility="hidden"
            bg={playerColor[player]}
            _groupHover={{
              visibility: gameOver ? "hidden" : "visible",
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Board;
