import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { memo, useState, useEffect, VFC } from 'react'
import { User } from '../../../types/api/user'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'

type Props = {
  user: User | null
  isOpen: boolean
  isAdmin?: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo(props => {
  const { user, isOpen, isAdmin = false, onClose } = props
  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setUserName(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onClickUpdate = () => alert('本来ならAPIたたく')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>User Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={userName}
                onChange={e => setUserName(e.target.value)}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tel</FormLabel>
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})
