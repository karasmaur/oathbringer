import React from "react";
import {Nav, Tab, Col, Row} from 'react-bootstrap';
import Notes from './Notes';

const sideMenu = () => {
    return(
        <Tab.Container id="left-tabs" defaultActiveKey="first" >
            <Row>
                <Col sm={1.8}>
                    <Nav variant="pills" className="flex-column sideMenu">
                        <Nav.Item className="sideMenuItem">
                            <Nav.Link eventKey="key1" className="sideMenuLink" href="/campaignMenu/notes">Notes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="key2" className="sideMenuLink">NPCs</Nav.Link>
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
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="key1">
                            <div>
                                <Notes/>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="key2">
                            <p>BIBO AWD AOW DNWDJAHW  DHWHADW </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="key3">
                            <p>BIBO AWD AOW DNWDJAHW  DHWHADW </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="key4">
                            <p>BIBO AWD AOW DNWDJAHW  DHWHADW </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="key5">
                            <p>BIBO AWD AOW DNWDJAHW  DHWHADW </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="key6">
                            <p>BIBO AWD AOW DNWDJAHW  DHWHADW </p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default sideMenu;