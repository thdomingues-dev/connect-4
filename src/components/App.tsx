import { ChakraProvider, Container, VStack, Flex } from "@chakra-ui/react";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import GameTitle from "components/GameTitle";
import { FC } from "react";
import { RecoilRoot } from "recoil";

const App: FC = () => (
  <ChakraProvider>
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
