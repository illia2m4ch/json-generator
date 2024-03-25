import React, {useEffect, useState} from "react"
import './Main.css'
import StubsonEditor from "../stubsoneditor/StubsonEditor"
import JsonPreview from "../jsonpreview/JsonPreview"
import PlayIcon from "../icon/play/PlayIcon";
import IconButton from "../button/icon/IconButton";
import ExportIcon from "../icon/play/ExportIcon";
import CopyIcon from "../icon/play/CopyIcon";

function Main() {
    const [value, setValue] = useState("")

    // useEffect(() => {
    //     initDivider()
    // });

    return <div className={"page-container"}>
        <header className={"header-container"}>
            <div className={"header-logo"}><p><b>Stubson</b></p></div>
            <nav className={"menu-container"}>
                <a className={"menu-item menu-item-active"}>Generator</a>
                <a className={"menu-item"}>Docs</a>
            </nav>
        </header>
        <div className={"main-container"}>
            <div className={"tab-container"}>
                <div className={"tab-header-container"}>
                    <p style={{marginLeft: 16}}>schema</p>
                    <div style={{flex: 1}}/>
                    {/*<IconButton style={{marginRight: 4}} onClick={run}>*/}
                    {/*    <PlayIcon/>*/}
                    {/*</IconButton>*/}
                </div>
                <div className={"tab-content-container"}>
                    <StubsonEditor className={"tab-container"} onValueChange={setValue}/>
                </div>
            </div>
            <div className={"tab-container"}>
                <div className={"tab-header-container"}>
                    <p style={{marginLeft: 16}}>output</p>
                    <div style={{flex: 1}}/>
                    {/*<IconButton style={{marginRight: 4}}>*/}
                    {/*    <CopyIcon/>*/}
                    {/*</IconButton>*/}
                    {/*<IconButton style={{marginRight: 4}}>*/}
                    {/*    <ExportIcon/>*/}
                    {/*</IconButton>*/}
                </div>
                <div className={"tab-content-container"}>
                    <JsonPreview className={"tab-container"} value={value}/>
                </div>
            </div>

            {/*<div className={"main-divider"}/>*/}
        </div>
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