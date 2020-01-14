import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../services/securityActions";
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
    const userIsAuthenticated = (
        <Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navlink" href="/campaignMenu">Campaign</Nav.Link>
                    <Nav.Link className="navlink" href="/characters">Characters</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="navlink">
                    Signed in as: <a href="/" className="loggedName">{props.security.user.fullName}</a>
                </Navbar.Text>
                <Nav.Item>
                    <Nav.Link className="navlink" href="/logout" onClick={props.logout}>Logout</Nav.Link>
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar.Collapse>
    );

    const userIsNotAuthenticated = (
        <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
                <Nav.Link className="navlink" href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navlink" href="/login">Login</Nav.Link>
            </Nav.Item>
        </Navbar.Collapse>
    );

    let headerLinks;

    if (props.security.validToken && props.security.user) {
        headerLinks = userIsAuthenticated;
    } else {
        headerLinks = userIsNotAuthenticated;
    }

    return (
        <Navbar bg="dark" expand="lg" className="navbar-main">
            <Navbar.Brand href="/" className="brandText" >
                <img
                    alt='sword'
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Oathbringer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {headerLinks}
        </Navbar>
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