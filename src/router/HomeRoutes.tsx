import { Home } from '../components/pages/Home'
import { UserManage } from '../components/pages/UserManage'
import { Setting } from '../components/pages/Setting'
import { Page404 } from '../components/pages/Page404'

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_manage',
    exact: false,
    children: <UserManage />,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]
