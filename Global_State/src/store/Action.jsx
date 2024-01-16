import { SET_TODO_INPUT, Add_TODO, DELETE_TODO } from "./Constant";

export const SettodoInput = payload => ({
    type : SET_TODO_INPUT,
    payload
})

export const Addtodo = payload => ({
    type : Add_TODO,
    payload
})

export const Deletetodo = payload => ({
    type: DELETE_TODO,
    payload
})