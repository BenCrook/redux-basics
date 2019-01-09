import { connect } from 'react-redux'
import { countDecrement, countIncrement, nameUpdate} from '../redux/actions';
import CounterComponent from '../components/counter/counter';

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
 * @type {{onDecrement: countDecrement, onIncrement: countIncrement}}
 */
const mapDispatchToProps = ({
    onDecrement: countDecrement,
    onIncrement: countIncrement,
    onNameChange: nameUpdate
});

/**
 * Connects the dispatches and maps to the rendered component
 */
const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default Counter;