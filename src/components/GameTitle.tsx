import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

interface GameTitleProps {
  title?: string
}

const GameTitle: FC<GameTitleProps> = ({ title = 'Connect 4' }) => (
  <Heading as="h1" fontWeight="semibold">
    {title}
  </Heading>
)

export default GameTitle
