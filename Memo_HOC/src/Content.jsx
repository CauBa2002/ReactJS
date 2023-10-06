import { memo } from "react";

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <>
      <h2>Hello guy</h2>
      <button onClick={onIncrease}>Click</button>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Content);
