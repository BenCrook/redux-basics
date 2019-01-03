/*
 * Action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NAME_UPDATE = 'NAME_UPDATE';
export const UI_BACKGROUND = 'UI_BACKGROUND';
export const UI_COLOR = 'UI_COLOR';
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

/**
 * Todo: Look into using one action for updating the UI, e.g updateUi(background, color, fontSize);
 * Updates the UI background
 * @param color
 * @returns {{type: string, color: *}}
 */
export const uiBackground = (color) => {
    return {
        type: UI_BACKGROUND,
        color
    }
};

/**
 * Updates the UI text color
 * @param color
 * @returns {{type: string, color: *}}
 */
export const uiColor = (color) => {
    return {
        type: UI_COLOR,
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
