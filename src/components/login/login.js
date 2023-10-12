import React from 'react'
import './login.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'

const login = () => {
  return (
    <div>
        <div className='header'>
          <h1>Sign in</h1>
        </div>

        <div className='email'>
          <AiOutlineMail />
          <input type='email' placeholder='Enter Email'/>
        </div>

        <div className='password'>
          <RiLockPasswordFill />
          <input type='password' placeholder='Password'/>
        </div>
    </div>
  )
}

export default login