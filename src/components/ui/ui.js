import React from 'react';
import Button from '../../containers/button';

/**
 * Array of popular themes.
 * @type {Array}
 */
const popularThemes = [
    {
        name: 'White/Black (Default)',
        background: '#fff',
        color: '#000'
    },
    {
        name: 'Black/White',
        background: '#000',
        color: '#fff'
    },
    {
        name: 'Grey/Red',
        background: '#393e46',
        color: '#ff3834'
    },
    {
        name: 'Grey/Blue',
        background: '#393e46',
        color: '#00adb6'
    },
    {
        name: 'Grey/Yellow',
        background: '#393e46',
        color: '#fab600'
    }
];

class UIComponent extends React.Component {
    /**
     * React component constructor.
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            customUi: {
                background: '',
                color: ''
            }
        }
    }

    /**
     * Handles the custom UI form submission. Sets the UI to the custom colours in the components local state.
     * @param {Event} event - The form submission event
     */
    handleCustomUiFormSubmit(event) {
        event.preventDefault();
        const state = this.state.customUi;
        this.props.uiStyleChange(state.background, state.color);
    }

    /**
     * Updates the component's local state with the new colours,
     * this is done programatically based on the inputs name attribute.
     * @param {Event} event
     */
    handleCustomUi(event) {
        const currentField = event.target;
        const name = currentField.name;
        const value = currentField.value;

        // Combine previous state with the property.
        // This is required as we are updating the state programatically based
        // on the input name. For example input[name="background"] will update state.customUi.background.
        this.setState(prevState => ({
            customUi: {
                ...prevState.customUi,
                [name]: value
            }
        }));
    }

    /**
     * Returns a button for each popular theme that will update the UI using props.uiStyleChange.
     */
    renderPopularThemes() {
        return (
            popularThemes.map((theme) => {
                const name = theme.name;
                const props = this.props;

                return <Button key={name}
                               callback={() => props.uiStyleChange(theme.background, theme.color)}
                               content={name} />
            })
        )
    }
    render() {
        return (
            <>
                <div>
                    <h2>Popular Themes</h2>
                    {this.renderPopularThemes()}
                </div>
                <div>
                    <h2>Create your Own Theme</h2>
                    <form onSubmit={(event) => this.handleCustomUiFormSubmit(event)}>
                        <input type="text"
                               name="background"
                               onChange={(event) => this.handleCustomUi(event)}/>
                        <input type="text"
                               name="color"
                               onChange={(event) => this.handleCustomUi(event)}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <h2>Full Reset</h2>
                    <Button content="Reset UI" callback={() => this.props.uiReset()} />
                </div>
            </>
        )
    }
}

export default UIComponent;
