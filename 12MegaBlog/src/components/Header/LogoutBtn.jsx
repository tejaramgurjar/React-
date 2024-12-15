import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler =()=>{
        authService.logout.then(()=>{
            dispatch(logout()) // logout hone ke baad store me jo bhi information ho wo upadate rhe uske liye ye use kiya 
        })
    }
  return (
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn
