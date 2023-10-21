import React from 'react'
import { useState } from 'react'
import './signup.css'
import {BiUser} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'


const Signup = () => {

  const[action, setAction] = useState('Login');


  return (
    <div className='container'>
        <div className='header'>
          <div className='text'> {action} </div>
          <div className='underline'></div>
        </div>
      <div className='inputs'>
        {action=== 'Login'? <div></div> : <div className='input'>
          <div className='icons'>
          <BiUser />
          </div>
          <input type='text' placeholder='Enter Name'/>
        </div> }
        

        <div className='input'>
          <div className='icons'>
          <AiOutlineMail />
          </div>
          <input type='email' placeholder='Enter Email'/>
        </div>

        <div className='input'>
          <div className='icons'>
          <RiLockPasswordFill />
          </div>
          <input type='password' placeholder='Password'/>
        </div>
      </div>    

      {action==='Sign Up'? <div></div>:<div className='password__actions'>Forgot Password? <span>click here</span></div>}

        <div className='submit-container'>
          <button className={action === 'Sign Up'? 'submit gray':'submit'} onClick={()=>{(setAction('Sign Up'))}}>
            Signup
          </button>
          
          <button className={action === 'Login'? 'submit gray':'submit'} onClick={()=>{(setAction('Login'))}}>
            Login
          </button>
        </div>


    </div>
  )
}

export default Signup;