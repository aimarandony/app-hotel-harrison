import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.less";
import UserContext from "./context/UserContext";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Book } from "./pages/Book";
import { NotFound } from "./pages/Error/NotFound";
import { Layout } from "./components/Layout";

const App = () => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const value = { user, setUser, logged, setLogged };

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute
                exact
                path="/inicio"
                component={Home}
                logged={logged}
              />
              <PrivateRoute
                exact
                path="/reserva"
                component={Book}
                logged={logged}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;

const PrivateRoute = ({ logged, component: Component, ...rest }) => {
  useEffect(() => {}, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};
