import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./redux/reducers";
import * as serviceWorker from './serviceWorker';
import App from './containers/app';

const store = createStore(reducer);


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
