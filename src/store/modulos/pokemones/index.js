import { combineReducers } from 'redux';
import getReducer from './get.reducer';
import findReducer from './find.reducer';
import deleteReducer from './delete.reducer';

const Reducers = combineReducers ({
    get: getReducer,
    find: findReducer,
    delete: deleteReducer,
});

export default  Reducers;