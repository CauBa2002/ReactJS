/* eslint-disable no-unused-vars */
import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initState } from "./reducer";

//initState

//Action

//reducer

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>Todo</h2>
      <input
        type="text"
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        style={{
          width: 300,
          height: 32,
          padding: 8,
        }}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={()  => {
                dispatch(deleteJob(index))
            }}
            style={{cursor: "pointer"}}>
                &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
