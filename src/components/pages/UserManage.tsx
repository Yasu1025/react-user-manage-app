/* eslint-disable react/jsx-no-useless-fragment */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { memo, useCallback, useEffect, VFC } from 'react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUser'

export const UserManage: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, isLoading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users })
      onOpen()
    },
    [onOpen, onSelectUser, users]
  )

  useEffect(() => getUsers(), [getUsers])
  return (
    <>
      {isLoading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map(user => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                id={user.id}
                imagePath='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
})
