import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
  useLocation as local
} from "react-router-dom";
import Crud from './crud/index';
import NewsFeed from './newsfeed/index';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/crud",
    exact: true,
    component: Crud
  },
  {
    path: "/newsfeed",
    exact: true,
    component: NewsFeed
  },
  {
    path: '*',
    component: error404,
  }
];

function error404() {
  let locaction = local();
  return (
    <div>
      <h1>erorr 404 !!!</h1>
      <h3>Not found : { locaction.pathname } !</h3>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Hello...</h1>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link exact className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link exact className="nav-link" to="/crud">Crud</Link>
          </li>
          <li className="nav-item">
            <Link exact className="nav-link" to="/newsfeed">News Feed</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;