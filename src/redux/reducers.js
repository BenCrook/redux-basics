import { combineReducers } from 'redux';
import {INCREMENT, DECREMENT} from "./actions";

const initialState = 0;

function counter (state = initialState, action) {
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
    counter
});

export default reducer;