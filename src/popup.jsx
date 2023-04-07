import React from "react";
import { render } from "react-dom";
import './popup.css'

function Popup() {
    return(
        <div>
            <h1>Hello, World!</h1>
            <p>This is boi chrome extension</p>
        </div>
    );
}

render(<Popup />, document.getElementById("react-target"));