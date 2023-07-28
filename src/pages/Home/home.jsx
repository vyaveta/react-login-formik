import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button'

const Home =  () => {

    const navigate = useNavigate()
    const userDetails = JSON.parse(localStorage.getItem("userDetails"))

    useEffect(() => {
        if(!userDetails) navigate('/login')
    },[])

    const onLogout = () => {
        localStorage.removeItem('userDetails');
        navigate('/login')
    }

  return (
    <div className='flex-col flex items-center w-full h-[100vh] justify-center'>
        <div className='max-w-[500px] flex flex-col space-y-4 bg-sky-100 rounded-xl p-5' >
            <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
            <div>
                <p>username: {userDetails?.username} </p>
                <p>email: {userDetails?.email} </p>
                <p>password: {userDetails?.password} </p>
            </div>
            <Button type={"button"} text={"Logout"} danger onClick={onLogout} />
        </div>
    </div>
  )
}

export default Home