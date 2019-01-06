/*
 * Action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NAME_UPDATE = 'NAME_UPDATE';
export const UI_STYLE_CHANGE = 'UI_STYLE_CHANGE';
export const UI_RESET = 'UI_RESET';

/**
 * Increments the count
 * @returns {{type: string}}
 */
export const countIncrement = () => {
    return {
        type: INCREMENT
    }
};

/**
 * Decrements the count
 * @returns {{type: string}}
 */
export const countDecrement = () => {
    return {
        type: DECREMENT
    }
};

/**
 * Updates the name
 * @param event
 * @returns {{type: string, name: *}}
 */
export const nameUpdate = (event) => {
    return {
        type: NAME_UPDATE,
        name: event.target.value
    }
};

export const uiStyleChange = (background, color) => {
    return {
        type: UI_STYLE_CHANGE,
        background,
        color
    }
};

/**
 * Resets the whole UI back to the initial state
 * @returns {{type: string}}
 */
export const uiReset = () => {
    return {
        type: UI_RESET
    }
};
