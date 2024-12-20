import React from 'react'
import { signInWithGoogle } from '../utilities/firebase'


const SignInButton = () => {
  return (
    <button className="btn btn-secondary btn-sm m-1" onClick={() => signInWithGoogle()} >
        Log in
    </button>
  )
}

export default SignInButton