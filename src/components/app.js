import React from 'react';
import Counter from '../containers/counter';
import UI from '../components/ui';
import styles from '../styling/app.module.css';

/**
 * @todo: Style the app based on the values of the UI object in the store
 */

const App = (props) => {
    const appStyling = {
        backgroundColor: props.background,
        color: props.color
    };

    return (
        <div style={appStyling} className={styles.app} >
            <UI updateBackground={props.uiBackground} />
            <Counter/>
        </div>
    )
};

export default App;
