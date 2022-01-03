/* eslint-disable react/jsx-no-useless-fragment */
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import { memo, useEffect, VFC } from 'react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'

export const UserManage: VFC = memo(() => {
  const { getUsers, users, isLoading } = useAllUsers()

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
                imagePath='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
})
