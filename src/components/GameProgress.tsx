import { Heading } from '@chakra-ui/react'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { gameOverState, playerState, playerNameState } from 'state'

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState)
  const playerName = useRecoilValue(playerNameState)
  const gameOver = useRecoilValue(gameOverState)

  const name = playerName[player]

  return (
    <Heading as="h3" size="lg" fontWeight="normal">
      {gameOver ? `${name} wins!` : `${name}'s turn`}
    </Heading>
  )
}

export default GameProgress
