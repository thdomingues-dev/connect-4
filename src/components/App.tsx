import { ChakraProvider, Container, VStack, Flex } from "@chakra-ui/react";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import GameTitle from "components/GameTitle";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import { theme } from 'config/theme/custom-chakra-ui-themes';

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <RecoilRoot>
      <Flex height='100vh' alignItems='flex-start'>
        <Container as={VStack} pt={12}>
          <GameTitle />
          <Board />
          <GameProgress />
          <GameControls />
        </Container>
      </Flex>
    </RecoilRoot>
  </ChakraProvider>
);

export default App;
