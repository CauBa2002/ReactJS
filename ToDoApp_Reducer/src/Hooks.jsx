import { useState } from "react";
import Reducer from "./Reducer";

function Hooks(){
    
    const [Show, setShow] = useState(false)

    return (
        <div style={{padding: 32}}>
            <button onClick={() => setShow(!Show)}>Toggle</button>
            {Show && <Reducer/>}
        </div>
    )
}

export default Hooks