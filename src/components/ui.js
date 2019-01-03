import React from 'react';

// @toDo: Rename the props so they can be CMD + Clicked back to the original function
const UIComponent = (props) => {
    return (
        (
            <>
                <div>
                    <h2>Full Reset</h2>
                    <button onClick={() => props.uiReset()}>Reset UI</button>
                </div>

                <div>
                    <h2>Background</h2>
                    <button onClick={() => props.updateBackground()}>Reset Background</button>
                    <button onClick={() => props.updateBackground('red')}>Red Background</button>
                    <button onClick={() => props.updateBackground('blue')}>Blue Background</button>
                </div>

                <div>
                    <h2>Color</h2>
                    <button onClick={() => props.updateColor()}>Reset Text</button>
                    <button onClick={() => props.updateColor('green')}>Green Text</button>
                    <button onClick={() => props.updateColor('red')}>Red Text</button>
                </div>
            </>
        )
    )
};

export default UIComponent;
