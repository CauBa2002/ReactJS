import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Hooks from './Hooks'
import './index.css'

function emitComment(id){
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail:`Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hooks />
  </React.StrictMode>,
)
