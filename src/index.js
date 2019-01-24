import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {loadState, saveState} from './local-storage';
import throttle from 'lodash/throttle';
import App from './containers/app';
import reducer from "./redux/reducers";
import "./reset.css";
import "./global.css";

const persistedState = loadState();

// Pass window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() as an argument to createStore
// for debugging with Redux dev tools.
const store = createStore(
    reducer,
    persistedState
);

/**
 * Subscribe to the store so local storage gets updated programatically.
 * State should only be stored here when required, saving state that isn't required is not efficient.
 * Throttle is used to ensure the functions don't fire too often, mainly as JSON.parse and JSON.stringify
 * are not very performant. 500 seems a good middle ground between performance and being too slow to save
 * user's changes before a refresh.
 */
store.subscribe(throttle(() => {
    saveState({
        ui: store.getState().ui
    })
}, 500));


/**
 * Creates the root element and sets the height on it (adding a CSS file just for this doesn't seem justifiable)
 * @returns {HTMLElement}
 */
const createRootElement = () => {
    const el = document.getElementById('root');
    el.style.height = '100%';

    return el;
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    createRootElement());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
