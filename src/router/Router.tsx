import { memo, VFC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404'
import { HeaderLayout } from '../components/templates/HeaderLayout'
import { LoginUserProvider } from '../providers/LoginUserProvider'
import { homeRoutes } from './HomeRoutes'

export const Router: VFC = memo(() => (
  <Switch>
    <LoginUserProvider>
      <Route exact path='/' render={() => <Login />} />
      <Route
        path='/home'
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map(hr => (
              <Route
                key={hr.path}
                path={`${url}${hr.path}`}
                exact={hr.exact}
                render={() => <HeaderLayout>{hr.children}</HeaderLayout>}
              />
            ))}
          </Switch>
        )}
      />
    </LoginUserProvider>
    <Route path='*' render={() => <Page404 />} />
  </Switch>
))
