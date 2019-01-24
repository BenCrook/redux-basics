import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component responsible for rendering the counter
 * @param {Object} props - The props are passed through from mapStateToProps and mapDispatchToProps in the counter container
 * @returns {*}
 * @constructor
 */
const CounterComponent = (props) => (
    <>
        <p>Welcome <b>{props.name}</b></p>
        <input onChange={(event) => props.onNameChange(event)} placeholder="Your name..." type="text"/>
        <h2>{props.count}</h2>
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onDecrement}>-</button>
    </>
);

CounterComponent.propTypes = {
    props: PropTypes.shape({
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })
};

export default CounterComponent;
