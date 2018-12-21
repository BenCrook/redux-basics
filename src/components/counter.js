import React from 'react';

/**
 * Component responsible for rendering the counter
 * @param {Object} props - The props are passed through from mapStateToProps and mapDispatchToProps in src/containers/counter.js
 * @returns {*}
 * @constructor
 */
const CounterComponent = (props) => (
    <>
        <h2>{props.count}</h2>
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onDecrement}>-</button>
    </>
);

export default CounterComponent;