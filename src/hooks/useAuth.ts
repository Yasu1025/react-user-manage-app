import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../types/api/user'
import { useToastMsg } from './useToastMsg'

export const useAuth = () => {
  const history = useHistory()
  const { showToast } = useToastMsg()
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(
    (id: string) => {
      setIsLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.data) {
            showToast({ title: 'Login Success', status: 'success' })
            history.push('/home')
          } else {
            showToast({ title: 'No User Matched...', status: 'error' })
          }
        })
        .catch(() => showToast({ title: 'Login Failed...', status: 'error' }))
        .finally(() => setIsLoading(false))
    },
    [history, showToast]
  )

  return { login, isLoading }
}
