import React from "react";
import {Nav} from "react-bootstrap";


const MenuOptions = (props) => {
    //This is used to show which option in the nav menu is currently selected.
    const notesLinkClassName = props.location.pathname.match(".*/notes$") ? "sideMenuLinkActive" : "sideMenuLink";
    const npcsLinkClassName = props.location.pathname.match(".*/npcs$") ? "sideMenuLinkActive" : "sideMenuLink";
    const citiesLinkClassName = props.location.pathname.match(".*/cities$") ? "sideMenuLinkActive" : "sideMenuLink";
    const itemsLinkClassName = props.location.pathname.match(".*/items$") ? "sideMenuLinkActive" : "sideMenuLink";
    const groupsLinkClassName = props.location.pathname.match(".*/groups$") ? "sideMenuLinkActive" : "sideMenuLink";
    const factsLinkClassName = props.location.pathname.match(".*/facts$") ? "sideMenuLinkActive" : "sideMenuLink";

    return (
        <Nav className="flex-column sideMenu">
            <Nav.Item className="sideMenuItem">
                <Nav.Link className={notesLinkClassName} href={`${props.match.url}/notes`}>Notes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={npcsLinkClassName} href={`${props.match.url}/npcs`}>NPCs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={citiesLinkClassName} href={`${props.match.url}/cities`}>Cities</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={itemsLinkClassName} href={`${props.match.url}/items`}>Items</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={groupsLinkClassName} href={`${props.match.url}/groups`}>Groups/Factions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={factsLinkClassName} href={`${props.match.url}/facts`}>Facts</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default MenuOptions;