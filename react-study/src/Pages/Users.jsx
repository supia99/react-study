import { useRouteMatch, Route, Link, Switch, useParams } from "react-router-dom"

function Users() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li><Link to={`${url}/james`}>James</Link></li>
        <li><Link to={`${url}/michael`}>Michael</Link></li>
      </ul>

      <Switch>
        <Route exact path={path}> ユーザーを選んでください。</Route>
        <Route path={`${path}/:userName`}>
          <SwitchUsers />
        </Route>
      </Switch>
    </div>

  )
}

function SwitchUsers() {
  let { userName } = useParams();

  return (
    <div>
      <h3>{userName}</h3>
    </div>
  )
}


export default Users;