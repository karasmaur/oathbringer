import React, {useEffect, useState} from "react";
import {Row, Col, Form, ListGroup} from 'react-bootstrap';
import {connect} from "react-redux";
import {getNotes, createNewNote} from "../../services/noteService";

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

const CreateNote = (props) => {
    const [toggleList, setToggleList] = useState(true);
    let itemsList = null;
    let itemListButton = "<";

    const title = useField('text');
    const text = useField('text');
    const id = useField('number');

    const loadNote = (note) => {
        id.set(note.id);
        title.set(note.title);
        text.set(note.text);
    };

    const clearState = () => {
        id.set('');
        title.set("");
        text.set("");
    };

    const ItemsList = () => {
        const items = props.notes;
        const noteListStyle = {
            maxHeight: "240px",
            marginBottom: "10px",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch"
        };

        return (
            <Col sm={3}>
                <button className="createNewButton" onClick={clearState}>Create New</button>
                <ListGroup style={noteListStyle} defaultActiveKey="#link1">
                    {
                        items.map(item => (
                            <ListGroup.Item className="itemListItem" action key={item.id} onClick={() => loadNote(item)}>
                                {item.title}
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
        props.getNotes(props.match.params.id);
    }, []);

    const onSubmit = () => {
        const newNote = {
            id: id.value,
            title: title.value,
            text: text.value
        };
        props.createNewNote(newNote);
    };

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
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="ControlTextarea1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control {...title.form} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="ControlTextarea2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" {...text.form}/>
                            </Form.Group>
                        </Form>
                        <input className="btn-primary" type="submit"/>
                    </div>
                </Col>
            </Row>
    );
};

const mapStateToProps = state => ({
    notes: state.note.notes
});

export default connect(
    mapStateToProps,
    { getNotes, createNewNote }
)(CreateNote);