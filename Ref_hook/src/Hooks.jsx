import { useState} from "react";
import Ref from "./Ref";

function Hooks(){

    const [Show, setShow] = useState(false)

    return(
        <div style={{padding: 32}}>
            <button onClick={() => setShow(!Show)}>Toggle</button>
            {Show && <Ref/>}
        </div>
    )

}

export default Hooks;