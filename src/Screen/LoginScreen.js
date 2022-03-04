import './LoginScreen.css'
import React, { useRef } from 'react'
import { signin } from '../firebase'

function LoginScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = async (e) => {
    e.preventDefault()
    // props.progress(20);
    await signin(emailRef.current.value, passwordRef.current.value).then((authuser) => {
      console.log(authuser);
    }).catch(error => alert(error.message))
    // props.progress(100);
  }

  return (
    <div className="signinscreen rounded">
      <form>
        <h2 className='my-3' style={{ textAlign: 'left' }}>Welcome back!!</h2>
        <input ref={emailRef} className='email' type="email" placeholder='Email Address' />
        <input ref={passwordRef} className='email' type="password" placeholder='Password' />
        <button onClick={signIn} className='btn-primary' type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginScreen