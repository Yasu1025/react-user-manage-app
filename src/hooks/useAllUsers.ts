import { useState, useCallback } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useToastMsg } from './useToastMsg'

export const useAllUsers = () => {
  const { showToast } = useToastMsg()
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<Array<User>>([])

  const getUsers = useCallback(() => {
    setIsLoading(true)
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(() => showToast({ title: 'Cannot get users...', status: 'error' }))
      .finally(() => setIsLoading(false))
  }, [showToast])

  return { getUsers, users, isLoading }
}
