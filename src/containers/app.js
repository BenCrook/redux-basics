import { connect } from 'react-redux';
import { uiBackground, uiColor, uiReset } from "../redux/actions";
import App from "../components/app";
import "../reset.css";

/**
 * Maps state to the props of the rendered component.
 * @param state
 * @returns {Object}
 */
const mapStateToProps = (state) => {
    return state.ui;
};

const actionCreators = {
    uiBackground,
    uiColor,
    uiReset
};

/**
 * Connects the dispatches and maps to the rendered component.
 */
export default connect(
    mapStateToProps,
    actionCreators
)(App);
