import React from 'react'
import './signup.css'
import {BiUser} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'


const Signup = () => {
  return (
    <div>
        <div className='header'>
          <h1>Sign up</h1>
        </div>

        <div className='user'>
          <BiUser />
          <input type='text' placeholder='Enter Name'/>
        </div>

        <div className='email'>
          <AiOutlineMail />
          <input type='email' placeholder='Enter Email'/>
        </div>

        <div className='password'>
          <RiLockPasswordFill />
          <input type='password' placeholder='Password'/>
        </div>

        <div className='button__actions'>
          <button className='sign__up'>
            Signup
          </button>
          
          <button className='log__in'>
            Login
          </button>
        </div>


    </div>
  )
}

export default Signup;