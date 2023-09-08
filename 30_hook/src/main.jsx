import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './to_do_list.jsx'
//import Two_way from './binding.jsx'
//import Gifts from './random.jsx'
//import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
)
