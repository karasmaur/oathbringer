import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../services/securityActions";
import { Form } from 'react-bootstrap';

const Login = (props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const loginOnSubmit = async (event) => {
           event.preventDefault();
           const loginRequest = {
               username: username,
               password: password
           };
           props.login(loginRequest);
    };

    useEffect(() => {
        if(props.security.validToken){
            props.history.push("/main");
        }
    });

    return (
      <div>
          <h1>Log in</h1>
          <Form onSubmit={loginOnSubmit}>
              <div>
                  <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleUserNameChange}
                  />
              </div>
              <div>
                  <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                  />
              </div>
              <input type="submit"/>
          </Form>
      </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    { login }
)(Login);