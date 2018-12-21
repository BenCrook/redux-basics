/*
 * Action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/*
 * Action creators
 */
export const incrementCount = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrementCount = () => {
    return {
        type: 'DECREMENT'
    }
};
