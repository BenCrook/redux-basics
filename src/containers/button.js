import { connect } from 'react-redux';
import Button from '../components/button/button';

/**
 * Maps state to the props of the rendered component.
 * @param state
 * @returns {Object}
 */
const mapStateToProps = (state) => {
    return state.ui;
};

/**
 * Connects the dispatches and maps to the rendered component.
 */
export default connect(
    mapStateToProps,
    null
)(Button);
