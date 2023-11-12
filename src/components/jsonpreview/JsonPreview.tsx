import React, {useState} from "react";
import Stubson from "../../stubson/parser/Stubson";

const stubson = new Stubson()

function JsonPreview(
    props: {
        value: string,
        className: string
    }
){
    return <pre className={props.className} style={{margin: 10, overflowY: 'scroll'}}>{stubson.generate(props.value)}</pre>
}

export default JsonPreview