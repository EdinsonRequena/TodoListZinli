import React from 'react'
import { saveAs } from "file-saver";
import { TodoContext } from './TodoContext';


function DownloadButton(props) {
    const handleClick = () => {
        console.log(props);
        const blob = new Blob([JSON.stringify(props.data)], { type: "application/json" });
        saveAs(blob, "data.json");
    }
    return (
        <div>
            <button onClick={handleClick}>Download</button>
        </div>
    )
}

export { DownloadButton }
