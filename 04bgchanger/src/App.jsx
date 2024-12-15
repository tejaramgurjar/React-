import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  function Blueclr() {
    setColor("blue")
  }

  return (
    <div className="w-full h-screen duration-200" style= {{backgroundColor:color}}>
      {/* //already double bracket hai toh bss color likh denge na kee {color} */}
       <div className="fixed flex flex flex-wrap justify-center bottom-12 inset-x-0 text-white px-2">
        
        
        <div className="fixed flex flex-wrap justify-center gap-3  shadow-lg px-2 py-2 bg-white rounded-3xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"green"}}>Green</button>
          <button onClick={Blueclr} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"blue"}}>Blue</button>
        </div>
        
        
        </div>
    </div>
  )
}

export default App
