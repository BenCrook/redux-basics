import React from 'react';
import Counter from '../containers/counter';
import UI from '../components/ui';
import styles from '../styling/app.module.css';

const App = (props) => {
    const appStyling = {
        backgroundColor: props.background,
        color: props.color
    };

    return (
        <div style={appStyling} className={styles.app} >
            <UI uiBackground={props.uiBackground} uiColor={props.uiColor} uiReset={props.uiReset} />
            <Counter/>
        </div>
    )
};

export default App;
