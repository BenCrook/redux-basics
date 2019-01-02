/*
 * Action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NAME_UPDATE = 'NAME_UPDATE';
export const UI_BACKGROUND = 'UI_BACKGROUND';

/*
 * Action creators
 */
export const countIncrement = () => {
    return {
        type: INCREMENT
    }
};

export const countDecrement = () => {
    return {
        type: DECREMENT
    }
};

export const nameUpdate = (event) => {
    return {
        type: NAME_UPDATE,
        name: event.target.value
    }
};

export const uiBackground = (color) => {
    return {
        type: UI_BACKGROUND,
        color
    }
};
