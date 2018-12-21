import { connect } from 'react-redux'
import { decrementCount, incrementCount } from '../redux/actions';
import CounterComponent from '../components/counter';

/**
 * Maps state to the props of the rendered component.
 * @param state
 * @returns {{count: Number}} - Returns the data the rendered component requires
 */
const mapStateToProps = (state) => {
    console.log(state);
    return {
        count: state.count
    }
};

/**
 * Maps the action dispatches to the props of the rendered component.
 * @type {{onDecrement: decrementCount, onIncrement: incrementCount}}
 */
const mapDispatchToProps = ({
    onDecrement: decrementCount,
    onIncrement: incrementCount
});

/**
 * Connects the dispatches and maps to the rendered component
 */
const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default Counter;