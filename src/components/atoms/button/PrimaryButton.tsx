import { memo, VFC, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  children: ReactNode
}

export const PrimaryButton: VFC<Props> = memo(props => {
  const { onClick, isDisabled = false, isLoading = false, children } = props
  return (
    <Button
      bg='teal.400'
      color='white'
      isLoading={isLoading}
      disabled={isDisabled}
      _hover={{ opacity: 0.4 }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
