import React, {useEffect, useState} from "react";
import {Col, Form, ListGroup, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {getNpcs} from "../../services/npcService";

const useField = (type) => {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value)
    };

    const set = (value) => {
        setValue(value)
    };

    return { form:{type, value, onChange}, set}
};

const CreateNpc = (props) => {
    const [toggleList, setToggleList] = useState(true);
    let itemsList = null;
    let itemListButton = "<";

    const name = useField("text");
    const race = useField("text");
    const description = useField("text");

    const loadNote = (npc) => {
        name.set(npc.name);
        race.set(npc.race);
        description.set(npc.description);
    };

    const ItemsList = () => {
        const items = props.npcs;
        const noteListStyle = {
            maxHeight: "240px",
            marginBottom: "10px",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch"
        };

        return (
            <Col sm={3}>
                <ListGroup style={noteListStyle} defaultActiveKey="#link1">
                    {
                        items.map(item => (
                            <ListGroup.Item className="itemListItem" action key={item.id} onClick={() => loadNote(item)}>
                                {item.name}
                            </ListGroup.Item>))
                    }
                </ListGroup>
            </Col>
        );
    };

    if(toggleList){
        itemsList = ItemsList();
        itemListButton = "<";
    } else {
        itemsList = null;
        itemListButton = ">";
    }

    const hideItemListOnClick = () => {
        setToggleList(!toggleList);
    };

    useEffect(() => {
        props.getNpcs(props.match.params.id);
    }, []);

    return (
            <Row>
                <Col sm={0}>
                    <div className="toggleItemList" onClick={hideItemListOnClick}>
                        <p>{itemListButton}</p>
                    </div>
                </Col>
                {itemsList}
                <Col  sm={8}>
                    <div>
                        <Form>
                            <Form.Group controlId="ControlTextarea1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control {...name.form} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="ControlTextarea2">
                                <Form.Label>Race</Form.Label>
                                <Form.Control {...race.form} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="ControlTextarea3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" {...description.form}/>
                            </Form.Group>
                        </Form>
                        <input className="btn-primary" type="submit"/>
                    </div>
                </Col>
            </Row>
    );
};

const mapStateToProps = state => ({
    npcs: state.npc.npcs
});

export default connect(
    mapStateToProps,
    { getNpcs }
)(CreateNpc);