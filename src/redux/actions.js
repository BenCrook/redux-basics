/*
 * Action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE_NAME = 'UPDATE_NAME';

/*
 * Action creators
 */
export const incrementCount = () => {
    return {
        type: INCREMENT
    }
};

export const decrementCount = () => {
    return {
        type: DECREMENT
    }
};

export const updateName = (event) => {
    return {
        type: UPDATE_NAME,
        name: event.target.value
    }
};
