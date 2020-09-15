import { combineReducers } from 'redux';
import toDos from './toDosReducer';

const rootReducer = combineReducers({
    toDos
});

export default rootReducer;
