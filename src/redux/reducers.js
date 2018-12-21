import { combineReducers } from 'redux';
import {INCREMENT, DECREMENT} from "./actions";

// @todo: Convert state to an object rather than Number
const initialState = 0;

function count (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const reducer = combineReducers({
    count
});

export default reducer;