import React from 'react'
import {container,Logo ,LogoutBtn } from '../index '
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux' // ye hoga tabhi toh dekh payenge kee user login hai ya nhi '



function Header() {
    const authStatus = useSelector((state)=>
  state.auth.status
    )
    const navigate =useNavigate()
    const navItems =[
        {
            name:'Home',
            slug:'/',
            active:true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus, // authstatus par dipend krega 
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

  return (
   <header className='py-3 shadow bg-gray-500'>

    <container>
        <nav className='flex'>
            <div className='mr-4'>
                <Link to='/'>
                <Logo widh='70px' />
                </Link>
            </div>
            <ul className='flex , ml-auto '>
                {navItems.map((items)=>
                items.active ? (
                    //jo html element repeat ho rha h us par key lgai jati hai 
                    <li key={items.name}>
                        <button
                        onClick={()=>navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        >{items.name}</button>
                    </li>
                ):null
                 )}
                 {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                 )}
            </ul>
        </nav>
    </container>
   </header>
  )
}

export default Header
