import React from "react";
import {Col, ListGroup} from "react-bootstrap";
import {Switch} from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecureRoute";

const ItemsList = (match, items) => {
    return (
        <Col sm={2}>
            <Switch>
                <SecuredRoute path={`${match.path}/notes`} component={() => Items(items)} />
            </Switch>
        </Col>
    );
};

const Items = (items) => {
    const noteListStyle = {
        maxHeight: "240px",
        marginBottom: "10px",
        overflow: "scroll",
        WebkitOverflowScrolling: "touch"
    };

    return (
        <div>
            <ListGroup style={noteListStyle} defaultActiveKey="#link1">
                {
                    items.map(item => (
                        <ListGroup.Item className="itemListItem" action href={`link#${item.id}`} key={item.id}>
                            {item.title}
                        </ListGroup.Item>))
                }
            </ListGroup>
        </div>
    );
};

export default ItemsList;