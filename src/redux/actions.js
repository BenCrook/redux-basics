/*
 * Action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NAME_UPDATE = 'NAME_UPDATE';

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
