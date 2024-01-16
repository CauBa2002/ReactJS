import { SET_TODO_INPUT, Add_TODO, DELETE_TODO } from "./Constant"

const initState = {
    todos : [],
    todiInput : '',
}

function Reducer(state, action){
    // eslint-disable-next-line no-empty
    switch(action.type){
        case SET_TODO_INPUT:
            return{
                ...state,
                todoInput: action.payload
            }
        case Add_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        default: 
            throw new Error('Invalid action.')
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export { initState }
export default Reducer