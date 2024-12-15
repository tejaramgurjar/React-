import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hanuman</h1>
      
      <Card delbachang ="Teju Don" btntext="click" channel="chai or cide"></Card>
      <Card delbachang ="Teju Don2"   btntext="visit" ></Card>

      
      
    </>
  )
}

export default App
