import React,{useId} from 'react'

// function Input() {
//     const Id = useId()
//   return (
//     <div>
      
//     </div>
//   )
// }

// arrow fuc use krke 

const Input = React.forwardRef(
    function Input({
        label,
        type='text',
        className='',
        ...props

   } ,ref){
    const id = useId();
        return ( 
        <div className='w-full'>
 {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>

        
            }
             <input type={text}  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
             ref={ref}
             {...props}
             id={id}></input>
        </div>
    )

    }
)

export default Input
