import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../types/api/user'

export const useAuth = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(
    (id: string) => {
      setIsLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.data) {
            history.push('/home')
          } else {
            alert('No User matched...')
          }
        })
        .catch(() => alert('Cannot Login...'))
        .finally(() => setIsLoading(false))
    },
    [history]
  )

  return { login, isLoading }
}
