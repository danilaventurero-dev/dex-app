import React from 'react';
import { Button, Form, FormGroup, Label, Input,  Container, Col } from 'reactstrap';
import useInput from '../hooks/useInput';
import {useDispatch} from 'react-redux';
import {msjActionsAsyncCreator as msjAction}  from '../store/modulos/message/messageAction'

const SendMessage = () => {

    const dispatch = useDispatch();
    const msj = useInput('','msj');

    const sendMsj = () => {
        const message = {
            message: msj.value
        }
        dispatch(msjAction(message))
    }

    return (
        <div>
        <Container >
            <Form>
            <Col sm={{ size: '6', offset: 3 }}>
            <h3 className="display-1" >Nuevo Mensaje!</h3>
                <FormGroup>
                    <Label for="msj">Nuevo Mensaje</Label>
                    <Input {...msj} placeholder="Mensaje" />
                </FormGroup>
            </Col>
            
            <Col sm={{ size: '6', offset: 3 }}>
            <Button onClick={(sendMsj)} >Send</Button>
            </Col>
            </Form>
        </Container>
        </div>
    );
};

export default SendMessage;