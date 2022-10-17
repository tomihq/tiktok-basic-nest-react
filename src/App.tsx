import { useState } from 'react'
import './App.css'
import { Tiktok } from './components/TikTok/Tiktok'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tiktok/>
    </div>
  )
}

export default App
