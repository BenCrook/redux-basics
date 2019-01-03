import {combineReducers} from 'redux';
import {
    INCREMENT,
    DECREMENT,
    NAME_UPDATE,
    UI_BACKGROUND,
    UI_COLOR,
    UI_RESET
} from "./actions";
import {initialStateCounter, initialStateUI} from "./initial-state";

/**
 * -----------------------
 * REDUCERS - must return a new state and not edit the existing state.
 * To return a new state we destructure the original state then
 * -----------------------
 */

/**
 * Counter reducer,
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} - The new state
 */
const counter = (state = initialStateCounter, action) => {
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
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

/**
 * UI reducer
 * @param state
 * @param action
 * @returns {{background: string, color: string}}
 */
const ui = (state = initialStateUI, action) => {
    switch (action.type) {
        case UI_BACKGROUND:
            return {
                ...state,
                background: action.color
            };
        case UI_COLOR:
            return {
                ...state,
                color: action.color
            };
        case UI_RESET:
            return {
                ...state,
                background: initialStateUI.background,
                color: initialStateUI.color
            };
        default:
            return state;
    }
};

/**
 * Combines multiple reducers
 */
const reducer = combineReducers({
    counter,
    ui
});

export default reducer;
