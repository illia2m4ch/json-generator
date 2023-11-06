import React from "react";
import {Genson} from "../../genson/parser/Genson";

const genson = new Genson()

function JsonPreview(
    props: {
        value: string,
        className: string
    }
){
    return <pre className={props.className} style={{margin: 10, overflowY: 'scroll'}}>{genson.generate(props.value)}</pre>
}

export default JsonPreview