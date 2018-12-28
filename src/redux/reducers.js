import { combineReducers } from 'redux';
import {
    INCREMENT,
    DECREMENT,
    NAME_UPDATE
} from "./actions";

/**
 * Sets the initial state of the app.
 * @type {{count: number, name: string}}
 */
const initialState = {
    count: 0,
    name: ''
};

/**
 * -----------------------
 * REDUCERS - must return a new state and not edit the existing state.
 * To return a new state we destructure the original state then
 * -----------------------
 */

/**
 * Counter reducer,
 * include our change, e.g `{...state, state.updatedProperty}`.
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} - The new state
 */

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case NAME_UPDATE:
            return {
                ...state, name: action.name
            };
        default:
            return state;
    }
};

/**
 * Combines multiple reducers
 */
const reducer = combineReducers({
    counter
});


export default reducer;