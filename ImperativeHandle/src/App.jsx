import { useRef } from 'react'
import Video from './Video'
import './App.css'

function App() {
  const videoRef = useRef()

  const handlePlay = () =>{
    videoRef.current.play()
  }

  const handlePause = () =>{
    videoRef.current.pause()
  }

  return (
    <div>
      <Video ref={videoRef}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}

export default App
