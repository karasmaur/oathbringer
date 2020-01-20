import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../services/securityService";
import { getCampaigns } from "../../services/campaignService";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = (props) => {
    useEffect(() => {
        props.getCampaigns();
    }, []);

    const userIsAuthenticated = (
        <Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title={<span className="dropdownTitle">Campaigns</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/createCampaign">Create New Campaign</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {
                            props.campaigns.slice(0, 3).map(campaign => (
                                <NavDropdown.Item key={campaign.id} href={`/campaign/${campaign.id}/menu`}>{campaign.name}</NavDropdown.Item>
                            ))
                        }
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/campaign">More...</NavDropdown.Item>
                    </NavDropdown>
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
    getCampaigns: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired,
    campaigns: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    campaigns: state.campaign.campaigns
});

export default connect(
    mapStateToProps,
    { logout, getCampaigns }
)(Header);