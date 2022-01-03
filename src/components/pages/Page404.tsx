import { memo, VFC } from 'react'
import { Link } from 'react-router-dom'

export const Page404: VFC = memo(() => (
  <div>
    <p>404</p>
    <Link to='/'>HOME</Link>
  </div>
))
