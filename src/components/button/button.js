import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
    const buttonStyling = {
        background: props.buttonBackground,
        color: props.buttonColor
    };

    return (
        <button style={buttonStyling}
                className={styles.button}
                onClick={props.callback}>
            {props.content}
        </button>
    )
};

export default Button;