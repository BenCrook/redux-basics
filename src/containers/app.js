import { connect } from 'react-redux';
import { uiStyleChange, uiReset } from "../redux/actions";
import App from "../components/app/app";

/**
 * Maps state to the props of the rendered component.
 * @param state
 * @returns {Object}
 */
const mapStateToProps = (state) => {
    return state.ui;
};

const actionCreators = {
    uiStyleChange,
    uiReset
};

/**
 * Connects the dispatches and maps to the rendered component.
 */
export default connect(
    mapStateToProps,
    actionCreators
)(App);
