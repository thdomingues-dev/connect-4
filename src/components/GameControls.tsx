import { FC, useState } from 'react'
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
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  RadioGroup,
  Radio,
  Heading,
} from '@chakra-ui/react'
import { RepeatIcon, SettingsIcon, CheckIcon } from '@chakra-ui/icons'
import { FiUsers as FiUsersIcon } from 'react-icons/fi'
import { useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil'
import { boardState, gameOverState, playerState, playerNameState, playerColorState } from 'state'
import { colors } from 'config/const'

interface GameSettingsModalProps {
  isModalOpen: boolean
  onModalClose: () => void
}

const formatColor = (color: string): string => color[0].toUpperCase().concat(color.slice(1))

const GameSettingsModal: FC<GameSettingsModalProps> = ({ isModalOpen, onModalClose }) => {
  const [playerName, setPlayerName] = useRecoilState(playerNameState)
  const [playerColor, setPlayerColor] = useRecoilState(playerColorState)

  const [customNamePlayer1, setCustomNamePlayer1] = useState(playerName[1])
  const [customNamePlayer2, setCustomNamePlayer2] = useState(playerName[2])
  const [customColorPlayer1, setCustomColorPlayer1] = useState(playerColor[1])
  const [customColorPlayer2, setCustomColorPlayer2] = useState(playerColor[2])

  const handleModalSave = () => {
    setPlayerName({ 1: customNamePlayer1, 2: customNamePlayer2 })
    setPlayerColor({ 1: customColorPlayer1, 2: customColorPlayer2 })

    onModalClose()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose} motionPreset="slideInBottom" size={{ base: 'xs', md: 'md' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect 4 - Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={8}>
            <Stack spacing={4}>
              <Heading as="h5" size="sm" fontWeight="semibold">
                Player 1
              </Heading>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiUsersIcon />
                </InputLeftElement>
                <Input value={customNamePlayer1} onChange={event => setCustomNamePlayer1(event.target.value)} />
              </InputGroup>
              <RadioGroup onChange={setCustomColorPlayer1} value={customColorPlayer1} defaultValue={customColorPlayer1}>
                <Stack direction="row">
                  {Object.entries(colors).map((color, index) => {
                    const colorFormatted = formatColor(color[0])

                    return (
                      <Radio key={index} value={color[1]} colorScheme={color[0]}>
                        {colorFormatted}
                      </Radio>
                    )
                  })}
                </Stack>
              </RadioGroup>
            </Stack>
            <Stack spacing={4}>
              <Heading as="h5" size="sm" fontWeight="semibold">
                Player 2
              </Heading>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiUsersIcon />
                </InputLeftElement>
                <Input value={customNamePlayer2} onChange={event => setCustomNamePlayer2(event.target.value)} />
              </InputGroup>
              <RadioGroup onChange={setCustomColorPlayer2} value={customColorPlayer2} defaultValue={customColorPlayer2}>
                <Stack direction="row">
                  {Object.entries(colors).map((color, index) => {
                    const colorFormatted = formatColor(color[0])

                    return (
                      <Radio key={index} value={color[1]} colorScheme={color[0]}>
                        {colorFormatted}
                      </Radio>
                    )
                  })}
                </Stack>
              </RadioGroup>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleModalSave} leftIcon={<CheckIcon />}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const GameControls: FC = () => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()

  const board = useRecoilValue(boardState)
  const resetBoard = useResetRecoilState(boardState)
  const resetPlayer = useResetRecoilState(playerState)
  const resetGameOver = useResetRecoilState(gameOverState)

  const handleReset = () => {
    resetBoard()
    resetPlayer()
    resetGameOver()
  }

  return (
    <SimpleGrid columns={2} spacing={4}>
      <Button onClick={handleReset} isDisabled={!board.some(col => col.length)} leftIcon={<RepeatIcon />}>
        Reset
      </Button>
      <Button onClick={onModalOpen} leftIcon={<SettingsIcon />}>
        Settings
      </Button>
      <GameSettingsModal isModalOpen={isModalOpen} onModalClose={onModalClose} />
    </SimpleGrid>
  )
}

export default GameControls
