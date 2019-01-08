// Taken from Dan Abramov's video - https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

/**
 * Uses the localStorage API to get the state
 * @returns {*}
 */
export const loadState = () => {
    try {
        const serlializedState = localStorage.getItem('state'); // Convert to JSON string

        if (serlializedState === null) {
            return undefined; // Let the reducers handle the state
        }

        return JSON.parse(serlializedState);
    } catch (error) {
        console.error(error);
        return undefined; // Let the reducers handle the state
    }
};

/**
 * Uses the localStorage API to save the state
 * toDo: Figure out why it should be serialized
 */
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state); // Convert to JSON string
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.error(error);
    }
};