import { useState } from 'react'
import Chai  from './chaii'
import './App.css'
import { Fragment } from 'react'

function App() {

  const per ='Don'

  return (
 
  // <Chai />

  //direct hm koi bhi html code return nhi kra skta yaa hm ye bol skte kee only ek hee element return kr skte hai 
  //it is give the an error:----
  //  <Chai />
  // <h1>hello<h1/>
//eske liye hm fragment(</>) kaa ya div(<div><div/>) ka use krte hai
/* <div>
<Chai />
<h1>hello teju</h1>
  // <div/> */

// Fragment

   <>
<Chai />
<h1>hello teju {per}</h1>
{/* {per}--- yha hm evaluated expression hee likhte h yani final reasult or ye javascript kee trh kaam krti h  */}
   </> 
  )
}

export default App

