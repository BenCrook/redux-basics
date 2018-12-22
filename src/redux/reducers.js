import { combineReducers } from 'redux';
import {INCREMENT, DECREMENT, UPDATE_NAME} from "./actions";

const initialState = {
    count: 0,
    name: ''
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        case UPDATE_NAME:
            return {...state, name: action.name};
        default:
            return state;
    }
};

const reducer = combineReducers({
    counter
});

export default reducer;