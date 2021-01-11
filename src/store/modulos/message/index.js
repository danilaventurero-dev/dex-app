import { combineReducers } from 'redux';
import msj from './message.reducer';

const Reducers = combineReducers ({
    msj: msj,
});

export default  Reducers;