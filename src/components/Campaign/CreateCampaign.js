import React, {useState} from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import {connect} from "react-redux";
import {createNewCampaign} from "../../services/campaignService";
import PropTypes from "prop-types";

const labelSize = 2;
const fieldSize = 5;

// Todo: Get this options from the server.
const gameTypeOptions = [{id:1, value: "Dungeon and Dragons"}, {id:2, value: "Savage Worlds"}, {id:3, value: "GURPS"}];
const gameSettingOptions = [{id:1, value: "Medieval/Magic"}, {id:2, value: "Medieval"}, {id:3, value: "Cyberpunk"}, {id:4, value: "Current Time"}];

const useField = (type) => {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value)
    };

    return {
        type,
        value,
        onChange
    }
};

const CreateCampaign = (props) => {
    const name = useField("text");
    const gameMaster = useField("text");
    const gameType = useField("select");
    const gameSetting = useField("select");

    const onSubmit = async (event) => {
        event.preventDefault();
        const newCampaign = {
            name: name.value,
            gameMaster: gameMaster.value,
            gameType: gameType.value,
            gameSetting: gameSetting.value
        };
        props.createNewCampaign(newCampaign, props.history);
    };

    return (
        <div className="outerCreateForm">
            <div className="innerCreateForm">
                <Form onSubmit={onSubmit}>
                    <Form.Group as={Row} controlId="name">
                        <Form.Label column sm={labelSize}>
                            Name
                        </Form.Label>
                        <Col sm={fieldSize}>
                            <Form.Control
                                placeholder="Descent Into Avernus"
                                {...name}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="gameMaster">
                        <Form.Label column sm={labelSize}>
                            Game Master Name
                        </Form.Label>
                        <Col sm={fieldSize}>
                            <Form.Control  placeholder="Mathew Mercer"  {...gameMaster}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="gameType">
                        <Form.Label column sm={labelSize}>
                            Game Type
                        </Form.Label>
                        <Col sm={fieldSize}>
                            <Form.Control as="select" {...gameType}>
                                {gameTypeOptions.map(option => (<option key={option.id}>{option.value}</option>))}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="gameSetting">
                        <Form.Label column sm={labelSize}>
                            Game Setting
                        </Form.Label>
                        <Col sm={fieldSize}>
                            <Form.Control as="select" {...gameSetting}>
                                {gameSettingOptions.map(option => (<option key={option.id}>{option.value}</option>))}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

CreateCampaign.propTypes = {
    createNewCampaign: PropTypes.func.isRequired
};

export default connect(
    null,
    { createNewCampaign }
)(CreateCampaign);