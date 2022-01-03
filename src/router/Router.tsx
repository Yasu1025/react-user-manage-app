import { memo, VFC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from '../components/pages/Login'
import { Page404 } from '../components/pages/Page404'
import { homeRoutes } from './HomeRoutes'

export const Router: VFC = memo(() => (
  <Switch>
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
              render={() => hr.children}
            />
          ))}
        </Switch>
      )}
    />

    <Route path='*' render={() => <Page404 />} />
  </Switch>
))
