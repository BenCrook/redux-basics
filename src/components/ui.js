import React from 'react';

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
                    <button onClick={() => props.uiBackground()}>Reset Background</button>
                    <button onClick={() => props.uiBackground('red')}>Red Background</button>
                    <button onClick={() => props.uiBackground('blue')}>Blue Background</button>
                </div>

                <div>
                    <h2>Color</h2>
                    <button onClick={() => props.uiColor()}>Reset Text</button>
                    <button onClick={() => props.uiColor('green')}>Green Text</button>
                    <button onClick={() => props.uiColor('red')}>Red Text</button>
                </div>
            </>
        )
    )
};

export default UIComponent;
