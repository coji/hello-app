import React, { useState, useRef } from 'react'
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

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await invoke('say', { message: inputEl.current.value })
  }

  return (
    <Container maxW="container.lg">
      <Heading>Hello!</Heading>

      <form onSubmit={handleFormSubmit}>
        <Stack>
          <Box>
            <FormLabel htmlFor="message">メッセージ</FormLabel>
            <Input id="message" autoFocus ref={inputEl}></Input>
          </Box>

          <Stack direction="row">
            <Button type="submit" colorScheme="green">
              Greeting
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  )
}

export default App
