import React, { useEffect, useState } from 'react'
import Account from '../components/Account'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const[uname,setUname]=useState("")
  const navigate=useNavigate()

  useEffect(()=>{
      if(localStorage.getItem("currentUser")){
          setUname((JSON.parse(localStorage.getItem("currentUser"))).userName)
      }
      else{
          alert("Please Login")
          navigate('/')
      }
  },[])

  return (

    
    <div>
        <Account userName={uname}/>
    </div>
  )
}

export default Profile