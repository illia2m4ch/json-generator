import React, {useEffect, useState} from "react"
import './Main.css'
import GensonEditor from "../gensoneditor/GensonEditor"
import JsonPreview from "../jsonpreview/JsonPreview"

function Main() {
    const [value, setValue] = useState("")

    // useEffect(() => {
    //     initDivider()
    // });

    return <div className={"main-container"}>
        <GensonEditor className={"main-item"} onValueChange={setValue}/>
        {/*<div className={"main-divider"}/>*/}
        <JsonPreview className={"main-item"} value={value}/>
    </div>
}

function initDivider() {
    const container = document.querySelector('.main-container') as HTMLElement
    const divider = document.querySelector('.main-divider') as HTMLElement
    const editor = container.querySelector('.main-item') as HTMLElement
    let isHandlerDragging = false

    document.addEventListener('mousedown', e => {
        if (e.target === divider) {
            isHandlerDragging = true
        }
    })

    document.addEventListener('mousemove', e => {
        if (!isHandlerDragging) {
            return false
        }

        // Get offset
        let containerOffsetLeft = container.offsetLeft

        // Get x-coordinate of pointer relative to container
        let pointerRelativeXpos = e.clientX - containerOffsetLeft

        // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
        let boxAminWidth = 60

        // Resize box A
        // * 8px is the left/right spacing between .handler and its inner pseudo-element
        // * Set flex-grow to 0 to prevent it from growing

        if (!editor) {
            return false
        }
        editor.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px'
        editor.style.flexGrow = '0'
    })

    document.addEventListener('mouseup', у => {
        isHandlerDragging = false;
    })

}

export default Main