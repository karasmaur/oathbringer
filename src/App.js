import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { logout } from "./services/securityActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import Register from "./components/User/Register";
import Login from "./components/User/Login";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
        type: "SET_CURRENT_USER",
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
    }
}

const App = () => {
      return (
          <Provider store={store}>
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />

                    <Switch>
                        {
                            //Add "SecureRoute" here.
                        }
                    </Switch>
                </div>
            </Router>
          </Provider>
      );
};

export default App;
