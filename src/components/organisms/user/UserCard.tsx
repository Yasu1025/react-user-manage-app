import { memo, VFC } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

type Props = {
  imagePath: string
  userName: string
  fullName: string
}

export const UserCard: VFC<Props> = memo(props => {
  const { imagePath, userName, fullName } = props
  return (
    <Box
      w='260px'
      h='260px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p='4'
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack textAlign='center'>
        <Image
          boxSize='160px'
          borderRadius='full'
          m='auto'
          src={imagePath}
          alt={userName}
        />
        <Text fontSize='lg' fontWeight='bold'>
          {userName}
        </Text>
        <Text fontSize='sm' color='gray'>
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
})
