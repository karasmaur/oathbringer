import React from "react";
import {Col, Row} from 'react-bootstrap';
import CreateNote from './CreateNote';
import CreateNpc from "./CreateNpc";
import MenuOptions from "./MenuOptions";
import {Switch} from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecureRoute";

const CampaignMenu = (props) => {
    return(
        <div className="outerCreateForm">
            <div className="innerCreateForm">
                <Row>
                    <Col sm={1.8}>
                        <MenuOptions location={props.location} match={props.match}/>
                    </Col>
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

export default CampaignMenu;