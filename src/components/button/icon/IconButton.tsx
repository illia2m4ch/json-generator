import * as React from "react";
import "./IconButton.css";

function IconButton({...props}) {
    return (
        <button className="icon-button" {...props}>
            {props.children}
        </button>
    )
}

export default IconButton;
