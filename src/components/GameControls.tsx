import { FC, useState } from "react";
import {
Button,
SimpleGrid,
Modal,
useDisclosure,
ModalOverlay,
ModalContent,
ModalHeader,
ModalCloseButton,
ModalBody,
ModalFooter,
FormControl,
Input,
InputGroup,
InputLeftElement,
Stack,
Text,
RadioGroup,
Radio,
} from "@chakra-ui/react";
import { RepeatIcon, SettingsIcon, CheckIcon, AtSignIcon } from "@chakra-ui/icons";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { boardState, gameOverState, playerState, playerNameState, playerColorState } from "state";
import { colors } from "config/const";

const GameControls: FC = () => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [customNamePlayer1, setCustomNamePlayer1] = useState('Red');
  const [customNamePlayer2, setCustomNamePlayer2] = useState('Yellow');
  const [customColorPlayer1, setCustomColorPlayer1] = useState('red');
  const [customColorPlayer2, setCustomColorPlayer2] = useState('yellow');

  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);

  const setPlayerName = useSetRecoilState(playerNameState);
  const setPlayerColor = useSetRecoilState(playerColorState);

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  const handleModalSave = () => {
    setPlayerName({ 1: customNamePlayer1, 2: customNamePlayer2 });
    setPlayerColor({ 1: customColorPlayer1, 2: customColorPlayer2});

    onModalClose();
  }

  return (
    <SimpleGrid columns={2} spacing={4}>
      <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)} leftIcon={<RepeatIcon />}>
        Reset
      </Button>
      <Button onClick={onModalOpen} leftIcon={<SettingsIcon />}>
        Settings
      </Button>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect 4 - Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Stack spacing={3}>
                <Text>Player1</Text>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' children={<AtSignIcon color='gray.300' />}/>
                  <Input placeholder="Insert custom name" onChange={(event) => setCustomNamePlayer1(event.target.value)} />
                </InputGroup>

                <Text>Player2</Text>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' children={<AtSignIcon color='gray.300' />}/>
                  <Input placeholder="Insert custom name" onChange={(event) => setCustomNamePlayer2(event.target.value)} />
                </InputGroup>
              </Stack>
              <Stack spacing={3}>
                <Text>Color1</Text>
                <RadioGroup onChange={setCustomColorPlayer1} value={customColorPlayer1}>
                  <Stack direction='row'>
                    {Object.entries(colors).map((color, index) =>
                      <Radio key={index} value={color[1]} colorScheme={color[0]}>{color[0]}</Radio>
                    )}
                  </Stack>
                </RadioGroup>

                <Text>Color2</Text>
                <RadioGroup onChange={setCustomColorPlayer2} value={customColorPlayer2}>
                  <Stack direction='row'>
                    {Object.entries(colors).map((color, index) => <Radio key={index} value={color[1]} colorScheme={color[0]}>{color[0]}</Radio>)}
                  </Stack>
                </RadioGroup>
              </Stack>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleModalSave} bg='gray.100' color='black' leftIcon={<CheckIcon />}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SimpleGrid>
  );
};

export default GameControls;
