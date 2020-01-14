import React, {useState} from "react";
import {Form} from 'react-bootstrap';

const Notes = () => {
    const [note, setNote] = useState('');

    const onChange = (event) => {
        setNote(event.target.value)
    };

    return (
        <div>
            <br/>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Current Sessions Notes</Form.Label>
                    <Form.Control as="textarea" rows="3" value={note} onChange={onChange}/>
                </Form.Group>
            </Form>
            <input className="btn-primary" type="submit"/>
        </div>
    );
};

export default Notes;