import {combineReducers} from 'redux';
import {
    INCREMENT,
    DECREMENT,
    NAME_UPDATE,
    UI_STYLE_CHANGE,
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
        case UI_STYLE_CHANGE:
            const background = action.background ? action.background : state.background;
            const color = action.color ? action.color : state.color;

            return {
                ...state,
                background: background,
                color: color
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
 * Combines multiple reducers.
 * Anything here will be added to the top level of the state. i.e state.counter and state.ui
 */
const reducer = combineReducers({
    counter,
    ui
});

export default reducer;
