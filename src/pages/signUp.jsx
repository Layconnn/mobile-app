import React from 'react'
import '../styles/pages/sign-up.scss'

function SignUp() {
  return (
    <>
        <div className="signUp">
            <img src="./image/logo.svg" alt="" className="signUp__image" />
            <p className="signUp__cap">Deliver Favourite Food</p>
        </div>
        <div className="sign-up-card">
            <h5 className='sign-up-card__one'>Signup</h5>
            <span className='sign-up-card__container'>
              <img src="./image/prof.svg" alt="" className='sign-up-card__container__image' />
              <input type="text" placeholder='Name' className='sign-up-card__container__inputs' />
            </span>
            <span className='sign-up-card__container1'>
               <img src="./image/ee.svg" alt="" className='sign-up-card__container1__image' />
               <input type="text" placeholder='Email' className='sign-up-card__container1__inputs' />
            </span>
            <span className='sign-up-card__container2'>
               <img src="./image/pad.svg" alt="" className='sign-up-card__container2__image' />
               <input type="text" placeholder='Password' className='sign-up-card__container2__inputs' />
               <img src="./image/eye.svg" alt="" className="sign-up-card__container2__image1" />
            </span>
            <div className='sign-up-card__btn'>Create Account</div>
        </div>
        <p className="bottom-cap">Already have an account?</p>
        <p className="siign">Signup</p>
    </>
  )
}

export default SignUp
