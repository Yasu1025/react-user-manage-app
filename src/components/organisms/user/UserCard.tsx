import { memo, VFC } from 'react'
import { Box, Image, Stack, Text } from '@chakra-ui/react'

type Props = {
  id: number
  imagePath: string
  userName: string
  fullName: string
  onClick: (id: number) => void
}

export const UserCard: VFC<Props> = memo(props => {
  const { id, imagePath, userName, fullName, onClick } = props
  return (
    <Box
      w='260px'
      h='260px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p='4'
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}
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
