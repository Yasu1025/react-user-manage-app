/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'
import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickLink = useCallback((path: string) => history.push(path), [])

  return (
    <>
      <Flex
        as='nav'
        color='gray.50'
        bg='teal.500'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: '5' }}
      >
        <Flex
          as='a'
          align='center'
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={() => onClickLink('/home')}
        >
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
            User Manage App
          </Heading>
        </Flex>
        <Flex
          align='center'
          fontSize='sm'
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={() => onClickLink('/home/user_manage')}>Users</Link>
          </Box>
          <Link onClick={() => onClickLink('/home/setting')}>Setting</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickTo={path => onClickLink(path)}
      />
    </>
  )
})
