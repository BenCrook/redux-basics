import { connect } from 'react-redux'
import { decrementCount, incrementCount, updateName} from '../redux/actions';
import CounterComponent from '../components/counter';

/**
 * Maps state to the props of the rendered component.
 * @param state
 * @returns {Object}
 */
const mapStateToProps = (state) => {
    return state.counter;
};

/**
 * Maps the action dispatches to the props of the rendered component.
 * @type {{onDecrement: decrementCount, onIncrement: incrementCount}}
 */
const mapDispatchToProps = ({
    onDecrement: decrementCount,
    onIncrement: incrementCount,
    onNameChange: updateName
});

/**
 * Connects the dispatches and maps to the rendered component
 */
const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default Counter;