import { connect } from 'react-redux'
import { decrementCount, incrementCount } from '../redux/actions';
import CounterComponent from '../components/counter';

const mapStateToProps = (state) => ({
    count: state
});

const mapDispatchToProps = ({
    onDecrement: decrementCount,
    onIncrement: incrementCount
});

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default Counter;