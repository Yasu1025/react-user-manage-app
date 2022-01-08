import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../types/api/user'
import { useToastMsg } from './useToastMsg'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const history = useHistory()
  const { showToast } = useToastMsg()
  const [isLoading, setIsLoading] = useState(false)
  const { loginUser, setLoginUser } = useLoginUser()

  const login = useCallback(
    (id: string) => {
      setIsLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.data) {
            // 静的データ扱ってるのでサンプル用
            const isAdmin = res.data.id === 10
            // set User to context
            setLoginUser({ ...res.data, isAdmin })
            showToast({ title: 'Login Success', status: 'success' })
            history.push('/home')
          } else {
            showToast({ title: 'No User Matched...', status: 'error' })
            setIsLoading(false)
          }
        })
        .catch(() => {
          showToast({ title: 'Login Failed...', status: 'error' })
          setIsLoading(false)
        })
    },
    [history, setLoginUser, showToast]
  )

  return { login, isLoading }
}
