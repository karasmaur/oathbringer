import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../services/securityActions";
import { Nav } from 'react-bootstrap';

const Header = (props) => {
    const userIsAuthenticated = (
        <div>
            <Nav.Item>
                <Nav.Link href="/">{props.security.user.fullName}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/logout" onClick={props.logout}>Logout</Nav.Link>
            </Nav.Item>
        </div>

    );

    const userIsNotAuthenticated = (
        <div>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
        </div>
    );

    let headerLinks;

    if (props.security.validToken && props.security.user) {
        headerLinks = userIsAuthenticated;
    } else {
        headerLinks = userIsNotAuthenticated;
    }

    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">Oathbringer</Nav.Link>
            </Nav.Item>
            {headerLinks}
        </Nav>
    );
};

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    { logout }
)(Header);