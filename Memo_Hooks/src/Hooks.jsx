import { useState } from "react";
import Memo from "./Memo";

function Hooks() {
  const [Show, setShow] = useState(false);

  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!Show)}>Toggle</button>
      {Show && <Memo />}
    </div>
  );
}

export default Hooks;
