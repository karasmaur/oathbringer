import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../services/securityService";
import { Form, Button } from 'react-bootstrap';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const loginOnSubmit = async (event) => {
           event.preventDefault();
           const loginRequest = {
               email: email,
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
      <div className="login">
          <h2>Log in</h2>
          <Form onSubmit={loginOnSubmit} className="loginForm">
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                  />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                  />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Login
              </Button>
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
