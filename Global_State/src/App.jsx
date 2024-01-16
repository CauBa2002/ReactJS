/* eslint-disable no-undef */
import './App.css'
import { useStore, actions } from './store'

function App() {
  const [state, dispatch] = useStore()
  const {todos , todoInput} = state

  const handleAdd = () => {
    dispatch(actions.Addtodo(todoInput))
  }

  return(
    <div>
      <input 
        type="text" value={todoInput} placeholder='Enter todo...'
        onChange={e => {
          dispatch(actions.SettodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo,index) =>(
        <li key={index}>
          {todo}
          <span onClick={() => {
            dispatch(actions.Deletetodo(index))
          }} style={{cursor: "pointer"}}>
            &times;
          </span>
        </li>
      ))}
    </div>
  )
}

export default App
