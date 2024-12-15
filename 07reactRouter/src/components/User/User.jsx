import React from 'react'
import { useParams } from 'react-router-dom'

// The useParams hook returns an object of key/value pairs of the
//  dynamic params from the current URL that were matched by the <Route path>.
//   Child routes inherit all params from their parent routes.

function User() {
    const {id} = useParams()
  return (
    <div> User :{id}</div>

    //eska mtlb hai dynamic data lena
  )
}

export default User
