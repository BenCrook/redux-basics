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
        buttonBackground: '#000',
        buttonColor: '#fff',
        color: '#000'
    },
    {
        name: 'Black/White',
        background: '#000',
        buttonBackground: '#fff',
        buttonColor: '#000',
        color: '#fff'
    },
    {
        name: 'Grey/Red',
        background: '#393e46',
        buttonBackground: '#ff3834',
        buttonColor: '#fff',
        color: '#ff3834'
    },
    {
        name: 'Grey/Blue',
        background: '#393e46',
        buttonBackground: '#00adb6',
        buttonColor: '#fff',
        color: '#00adb6'
    },
    {
        name: 'Grey/Yellow',
        background: '#393e46',
        buttonBackground: '#fab600',
        buttonColor: '#fff',
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
                buttonBackground: '',
                buttonColor: '',
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
        this.props.uiStyleChange(state.background, state.buttonBackground, state.buttonColor, state.color);
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
                               callback={() => props.uiStyleChange(
                                   theme.background,
                                   theme.buttonBackground,
                                   theme.buttonColor,
                                   theme.color
                               )}
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
                               placeholder="Background Color"
                               onChange={(event) => this.handleCustomUi(event)}/>
                        <input type="text"
                               name="buttonBackground"
                               placeholder="Button Background"
                               onChange={(event) => this.handleCustomUi(event)}/>
                        <input type="text"
                               name="buttonColor"
                               placeholder="Button Color"
                               onChange={(event) => this.handleCustomUi(event)}/>
                        <input type="text"
                               name="color"
                               placeholder="Color"
                               onChange={(event) => this.handleCustomUi(event)}/>
                        <Button content="Submit" type="submit" />
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
