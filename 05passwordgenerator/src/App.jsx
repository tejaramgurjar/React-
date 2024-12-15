// useEffect, useRef and useCallback with 1 project


import { useState ,useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllow,setCharAllow]=useState(false)
const[password,setPassword]=useState("")

// useRef Hook
const passwordRef =useRef(null)



// useCallback(function, [dependencies]);
//ek hee mathod ko hm baar baar call kr rhe h jese phle use number ke liye phir character ke liye  etc us condition me hm usecallback hook ka us krenge 
const passwordGenrator =useCallback(()=>{
   let pass="";
   let str =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(numberAllowed){
    str+="0123456789"
   }
   if(charAllow){
    str+="!@#$%^&*(){}[]~"
   }

   for (let i = 1; i < length; i++) {
    let char =Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
   }
   setPassword(pass)

},[length,numberAllowed,charAllow])



//direct call nhi kr skte es liye useeffect ka use krenge 
useEffect(()=>{
  passwordGenrator()
},[length,numberAllowed,charAllow,passwordGenrator])

const copyPasswordToClipboard =useCallback(()=>{
  //user ko acha effect dene ke liye or text ko blue kr ke copy krne ke liye hm 
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,3)

  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
       
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5  my-8 text-orange-500 bg-gray-700'>


<h1 className=' text-center text-white my-3'>Password genrator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text"
   value={password}
   className='outline-none w-full py-1 px-3'
   placeholder='Password'
   ref={passwordRef}
   readOnly
  
  />
<button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>

</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex item-center gap-x-1'>
    <input type="range" min={8} max={100} value={length} className='corsor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
    <label> length {length}</label>
  </div>
<div className='flex items-center gap-x-1'>
<input type="checkbox"  defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
<label> number </label>
</div>
<div className='flex items-center gap-x-1'>
<input type="checkbox"  defaultChecked={charAllow} id='characterInput' onChange={()=>{setCharAllow((prev)=>!prev)}}/>
<label> character</label>
</div>

</div>


</div>

     
    </>
  )
}

export default App
