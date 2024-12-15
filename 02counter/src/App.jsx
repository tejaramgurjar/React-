// import react,{ useState } from 'react'
import { useState } from 'react'


import './App.css'

function App() {

let[counter,setCounter]=useState(5)

// setcounter kee jgh kuch bhi rkh skte hai 



  // let counter =5;

  const addValue =() =>{
    console.log("clicked",counter);
    counter =counter+1
    // console.log(counter)
    setCounter(counter)

    // setCounter(counter)
    // setCounter(counter)
    // setCounter(counter)
    // setCounter(counter)
    // this will prient normally 16



    // and we we really want to change the value then use this
    // setCounter(Prevcounter => Prevcounter+1)
    // setCounter(Prevcounter => Prevcounter+1)
    // setCounter(Prevcounter => Prevcounter+1)
    // setCounter(Prevcounter => Prevcounter+1)




    // if (counter<=20) {
    //   setCounter(counter)
    //   return
    // } 


  }

  function removeValue(){
    setCounter(counter-1) 
  // if (counter>=1) {
  //   setCounter(counter-1)
  //   return
  // } 

  }
  



//  function addValue(){
//   console.log("value added",Math.random());
//  }
  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value: {counter} </h2>
        <button onClick={addValue}>add value {counter}</button>
        <br />      
        <button onClick={removeValue}>remove value {counter}</button>      
        <p> footer: {counter}</p>
    </>
  )
}

export default App










/***************************************************************************************06 Virtual DOM, Fibre and reconciliation************************************** */



/* 


1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately.



*/