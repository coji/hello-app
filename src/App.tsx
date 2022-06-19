import { useState, useRef } from 'react'
import {
  Container,
  Heading,
  Stack,
  Box,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { invoke } from '@tauri-apps/api'

function App() {
  const inputEl = useRef<HTMLInputElement>(null!)

  const handleClickInvoke = async () => {
    await invoke('say', { message: inputEl.current.value })
  }

  return (
    <Container maxW="container.lg">
      <Heading>Hello!</Heading>

      <Stack>
        <Box>
          <FormLabel htmlFor="message">メッセージ</FormLabel>
          <Input id="message" ref={inputEl}></Input>
        </Box>

        <Stack direction="row">
          <Button onClick={() => handleClickInvoke()} colorScheme="green">
            Greeting
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
