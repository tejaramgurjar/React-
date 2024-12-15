import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return(
    <div>
      <h1>costom react </h1>
    </div>
  )
  
}


//last me hmara ye MyApp hmesha convert ho rha hai 
const reactElemet = {
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },

    children:'click me to visit google'

}

const anotherElement =  (
    <a href="google.com" target='_blank'>view google</a>
)
// const anotherElement1 = " chai or code"
// create a element by the react
const reactElemet1 = React.createElement(
        'a',
        {href:'https://chat.openai.com/', target:'_blank'},
        'click me to visit',
        // anotherElement1
        //we can not write if else in object 
)


ReactDOM.createRoot(document.getElementById('root')).render(
   
   
// reactElemet1

    // anotherElement

    
    
 <App /> 

    // {/* <MyApp /> */}
    // MyApp()

    // < reactElemet /> 
    //ye krne par deta show ya a tag show ho jana chaiye tha lekin easa nhi hote Q kee yha toh function expect kiya ja rha h result dene ke liye or hm ek object ko de rhe hai 
    // reactElemet()
  
)
