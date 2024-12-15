// maan lo ab ek a tag ko render krana chate hai (jese hm ek function bnate hai or usme hm kuch element return krate hai or us element ko react ka use kra kr kese show krte hai  )
function customRender(reactElement,Container) {
    /*
    const domElement = document.getElementById(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)
  Container.appendChild(domElement)
    
*/
// ab hm upar wale code ko modular bnate hai version 2 me 
const domElement = document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children

for (const prop in reactElement.props) {
    if(prop == 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
}
Container.appendChild(domElement)


}

const reactElemet = {
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },

    children:'click me to visit google'

}


const mainContainer =document.querySelector('#root')


// ab chate  hai kee  hmare pass ek element ho ya mathod ho or wo mathod reactElement ko render kar de(mtbl reactElement ko add kr de root me)

customRender(reactElemet,mainContainer)