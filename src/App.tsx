import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from './theme/theme'

export default function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <div className='App'>HELLO WORLD!!!</div>
    </ChakraProvider>
  )
}
