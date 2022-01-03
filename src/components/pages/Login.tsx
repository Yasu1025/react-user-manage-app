import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const Login: VFC = memo(() => (
  <Flex align='center' justify='center' height='100vh'>
    <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
      <Heading as='h1' size='lg' textAlign='center'>
        User Manage App
      </Heading>
      <Divider my={4} />
      <Stack spacing={6} px={10}>
        <Input placeholder='User ID' />
        <PrimaryButton>Login</PrimaryButton>
      </Stack>
    </Box>
  </Flex>
))
