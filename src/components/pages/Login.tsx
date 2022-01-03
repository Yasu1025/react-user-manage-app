import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { ChangeEvent, memo, useState, VFC } from 'react'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useAuth } from '../../hooks/useAuth'

export const Login: VFC = memo(() => {
  const { login, isLoading } = useAuth()
  const [userId, setUserId] = useState('')
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)
  const onLogin = () => login(userId)

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>
          User Manage App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} px={10}>
          <Input placeholder='User ID' onChange={onChangeUserId} />
          <PrimaryButton
            onClick={onLogin}
            isLoading={isLoading}
            isDisabled={userId === ''}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
