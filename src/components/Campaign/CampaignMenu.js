import React from "react";
import {Nav, Tab, Col, Row} from 'react-bootstrap';
import Notes from './Notes';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecureRoute";

const Npcs = () => {
    console.log("Inside NPCs Components!");
    return (
        <div>
            <p>
                TESTE AQUI
            </p>
        </div>
    );
};

const Options = (props) => {
    return (
        <Nav variant="pills" className="flex-column sideMenu">
            <Nav.Item className="sideMenuItem">
                <Nav.Link className="sideMenuLink" href={`${props.match.url}/notes`}>Notes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="sideMenuLink" href={`${props.match.url}/npcs`}>NPCs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="key3" className="sideMenuLink">Cities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="key4" className="sideMenuLink">Items</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="key5" className="sideMenuLink">Groups/Factions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="key6" className="sideMenuLink">Facts</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

const CampaignMenu = ({match}) => {
    return(
        <Row>
            <Col sm={1.8}>
                <Options match={match}/>
            </Col>
            <Col sm={9}>

                <Switch>
                    <SecuredRoute path={`${match.path}/notes`} component={Notes} />
                    <SecuredRoute path={`${match.path}/npcs`} component={Npcs} />
                </Switch>
            </Col>
        </Row>
    );
};

export default CampaignMenu;