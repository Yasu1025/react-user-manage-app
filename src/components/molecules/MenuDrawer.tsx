import { memo, VFC } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
  onClickTo: (path: string) => void
}
export const MenuDrawer: VFC<Props> = memo(props => {
  const { isOpen, onClose, onClickTo } = props
  return (
    <Drawer placement='right' size='xs' isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' onClick={() => onClickTo('/home')}>
              TOP
            </Button>
            <Button w='100%' onClick={() => onClickTo('/home/user_manage')}>
              Users
            </Button>
            <Button w='100%' onClick={() => onClickTo('/home/setting')}>
              Setting
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
