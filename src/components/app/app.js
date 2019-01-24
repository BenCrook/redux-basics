import React from 'react';
import Counter from '../../containers/counter';
import UI from '../ui/ui';
import styles from './app.module.css';

const App = (props) => {
    const appStyling = {
        backgroundColor: props.background,
        color: props.color
    };

    return (
        <div style={appStyling} className={styles.container}>
            <div className={styles.app}>
                <UI uiStyleChange={props.uiStyleChange} uiReset={props.uiReset} />
                <Counter/>
            </div>
        </div>
    )
};

export default App;
