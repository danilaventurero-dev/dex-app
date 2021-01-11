import React from 'react';
import {useSelector} from 'react-redux';
import useInput from '../hooks/useInput'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

const FormVer = () => {
    const pok = useSelector(store => store.pokemones.find.data.data );
    const name    =  useInput (    pok  ? pok.name             :  '','nombre'              );
    const weight    =  useInput (    pok  ? pok.weight             :  '','weight'              );
    const height    =  useInput (    pok  ? pok.height             :  '','height'              );
  return (
    <Form>
    <Row form>
    <Col md={4}>
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input {...name} type="text" id="name" placeholder="Nombre del pokemon" />
        </FormGroup>
    </Col>
    <Col md={4}>
        <FormGroup>
            <Label for="weight">Weight</Label>
            <Input {...weight} type="number" id="weight" placeholder="Weight del pokemon" />
      </FormGroup>
    </Col>
    <Col md={4}>
        <FormGroup>
            <Label for="height">Height</Label>
            <Input {...height} type="number" id="height" placeholder="height drl pokemon" />
      </FormGroup>
    </Col>
    </Row>
   
    
    
    <Row form>
    <Col md={6}>
        <FormGroup>
          <Button color="primary" >Guardar</Button>
        </FormGroup>
    </Col>
    </Row>
    
</Form>     


  );
}

export default FormVer;