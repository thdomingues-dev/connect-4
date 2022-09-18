import { ChakraProvider, Container, VStack } from '@chakra-ui/react'
import Board from 'components/Board'
import GameControls from 'components/GameControls'
import GameProgress from 'components/GameProgress'
import GameTitle from 'components/GameTitle'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { theme } from 'config/theme/custom-chakra-ui-themes'

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <RecoilRoot>
      <Container pt={12}>
        <VStack spacing={{ base: 4, md: 8 }}>
          <GameTitle />
          <Board />
          <GameProgress />
          <GameControls />
        </VStack>
      </Container>
    </RecoilRoot>
  </ChakraProvider>
)

export default App
