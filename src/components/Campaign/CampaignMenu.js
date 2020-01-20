import React, {useEffect, useState} from "react";
import {Col, Row} from 'react-bootstrap';
import CreateNote from './CreateNote';
import CreateNpc from "./CreateNpc";
import MenuOptions from "./MenuOptions";
import ItemsList from "./ItemList";
import {Switch} from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecureRoute";
import {connect} from "react-redux";
import {getNotes} from "../../services/noteService";

const CampaignMenu = (props) => {
    const [toggleList, setToggleList] = useState(true);
    let itemsList = null;
    let itemListButton = "<";

    if(toggleList){
        itemsList = ItemsList(props.match, props.notes);
        itemListButton = "<";
    } else {
        itemsList = null;
        itemListButton = ">";
    }

    const hideItemListOnClick = () => {
        setToggleList(!toggleList);
    };

    useEffect(() => {
        props.getNotes(props.match.params.id);
    }, []);

    return(
        <div className="outerCreateForm">
            <div className="innerCreateForm">
                <Row>
                    <Col sm={1.8}>
                        <MenuOptions location={props.location} match={props.match}/>
                    </Col>
                    <Col sm={0}>
                        <div className="toggleItemList" onClick={hideItemListOnClick}>
                            <p>{itemListButton}</p>
                        </div>
                    </Col>
                    {itemsList}
                    <Col sm={8}>
                        <Switch>
                            <SecuredRoute path={`${props.match.path}/notes`} component={CreateNote} />
                            <SecuredRoute path={`${props.match.path}/npcs`} component={CreateNpc} />
                        </Switch>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    notes: state.note.notes
});

export default connect(
    mapStateToProps,
    { getNotes }
)(CampaignMenu);