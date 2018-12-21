import React from 'react';

const CounterComponent = (count) => (
    <>
        <h2>{count.count.counter}</h2>
        <button onClick={count.onIncrement}>+</button>
        <button onClick={count.onDecrement}>-</button>
    </>
);

export default CounterComponent;