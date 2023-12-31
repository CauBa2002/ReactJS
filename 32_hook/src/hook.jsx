import { useState } from "react";
import Content from "./Content";

function Mounted(){
    const [show, setShow] = useState(false)

    return(
        <div style={{padding:32}}>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    )
}

export default Mounted;

