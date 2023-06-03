import React from 'react'
import '../styles/pages/sign-in-page.scss';

function SignInPage() {
  return (
    <>
        <div className='sign-in'>
            <img src="./image/logo.svg" alt="" className="sign-in__image" />
            <p className="sign-in__cap">Deliver Favourite Food</p>
        </div>
        <div className='login-card'>
            <h5 className='login-card__one'>Login</h5>
            <span className='login-card__container'>
              <img src="./image/prof.svg" alt="" className='login-card__container__image' />
              <input type="text" placeholder='example@gmail.com' className='login-card__container__inputs' />
            </span>
            <span className='login-card__container1'>
               <img src="./image/pad.svg" alt="" className='login-card__container1__image' />
               <input type="text" placeholder='Password' className='login-card__container1__inputs' />
               <img src="./image/eye.svg" alt="" className="login-card__container1__image1" />
            </span>
            <p className='login-card__last-option'>Forgot Password?</p>
            <div className="login-card__btn">Login</div>
            <h3 className='login-card__other-option'>Or</h3>
            <img src="./image/fr.svg" alt="" className="login-card__image2" />
        </div>
        <p className="final-option">Don't have an account?</p>
        <p className="register">REGISTER</p>
    </>
  )
}

export default SignInPage
