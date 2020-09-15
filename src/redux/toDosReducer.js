import {
    SET_COMPLETE,
    SET_INCOMPLETE
} from './toDosActions';

const initialState = {
    byId: {
        a: 'Buy milk',
        b: 'Go running',
        c: 'Start a company',
    },
    completedIds: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMPLETE:
            return {
                ...state,
                completedIds : [...state.completedIds.filter(id => id !== action.payload.id), action.payload.id]
            };
        case SET_INCOMPLETE:
            return {
                ...state,
                completedIds: state.completedIds.filter(id => id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default reducer;
