import { useState } from "react";
import Chat from "./Chat";

function Hooks(){

    const [Show, setShow] = useState(false)
    return(
        <div style={{padding: 32}}>
            <button onClick={() => setShow(!Show)}>Toggle</button>
            {Show && <Chat/>}
        </div>
    )
}

export default Hooks;