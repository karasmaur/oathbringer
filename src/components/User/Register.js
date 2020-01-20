import React, {useEffect, useState} from "react";
import { createNewUser } from "../../services/securityService";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUserNameChange = (event) => {
      setUsername(event.target.value)
    };

    const handleNameChange = (event) => {
        setFullName(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    };

    const addUser = async (event) => {
        event.preventDefault();
        const userObject = {
            username: username,
            fullName: fullName,
            password: password,
            confirmPassword: confirmPassword
        };
        props.createNewUser(userObject, props.history);
    };

    useEffect(() => {
        if(props.security.validToken){
            props.history.push("/main");
        }
    });

    // Todo: Change style to match the rest of the site.
    // Todo: Create single custom hook to reduce code and use spread syntax in the forms.
    return (
        <div>
            <h1>Sign Up</h1>
            <p>Create your account</p>
            <form onSubmit={addUser}>
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
                        type="text"
                        placeholder="Full name"
                        name="fullName"
                        value={fullName}
                        onChange={handleNameChange}
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
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
};

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    { createNewUser }
)(Register);