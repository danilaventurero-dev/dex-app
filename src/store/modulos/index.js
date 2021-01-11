  
import { combineReducers } from 'redux';
import Reducers from './message';
import pokemones from './pokemones';

const rootReducer = combineReducers({
    Reducers,
    pokemones
});

export default rootReducer;