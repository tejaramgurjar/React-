
// container aapki properties ko accept krta as a children 
//style prope dalte hai 
import React, { Children } from 'react'

function container() {
  return <div className='w-full max-w-7 max-auto px-4'>{Children} </div>;
    
 
   
}

export default container
