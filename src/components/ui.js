import React from 'react';

const UIComponent = (props) => (
    <>
        <h2>UI HERE</h2>

        <button onClick={() => props.updateBackground()}>Reset</button>
        <button onClick={() => props.updateBackground('red')}>Change to red</button>
        <button onClick={() => props.updateBackground('blue')}>Change to blue</button>

        {/*<h2>Reset</h2>*/}
        {/*<button>Reset All</button>*/}

        {/*<h2>Popular</h2>*/}
        {/*<button>Red/Blue</button>*/}
        {/*<button>White/Black</button>*/}

        {/*<h2>Mode</h2>*/}
        {/*<button>Mobile</button>*/}
        {/*<button>Tablet</button>*/}
        {/*<button>Desktop</button>*/}

        {/*<h2>BG</h2>*/}
        {/*<button onClick={() => backgroundColor()}>Reset</button>*/}
        {/*<button onClick={() => backgroundColor('red')}>Red</button>*/}
        {/*<button onClick={() => backgroundColor('blue')}>Blue</button>*/}

        {/*<h2>Text</h2>*/}
        {/*<button onClick={() => textColor()}>Reset</button>*/}
        {/*<button onClick={() => textColor('white')}>White</button>*/}
        {/*<button onClick={() => textColor('red')}>Red</button>*/}
        {/*<button onClick={() => textColor('blue')}>Blue</button>*/}
    </>
);

export default UIComponent;