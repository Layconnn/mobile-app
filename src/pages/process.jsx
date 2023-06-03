import React from 'react'
import '../styles/pages/process.scss';

function Process() {
  return (
    <>
        <img src="./image/path.svg" alt="" className="path" />
        <p className='instruct'>Fill in your bio to get started</p>
        <p className="content">This data will be displayed in your account profile for security</p>
        <div className='the'>
            <span className='the__process__container'>
                <img src="./image/prof.svg" alt="" className='the__process__container__image' />
                <input type="text" placeholder='Full Name' className='the__process__container__inputs' />
            </span>
            <span className='the__process__container2'>
            <img src="./image/map.svg" alt="" className='the__process__container2__image' />
            <input type="text" placeholder='Password' className='the__process__container2__inputs' />
            <img src="./image/v.svg" alt="" className="the__process__container2__image1" />
            </span>
            <span className='the__process__container3'>
                <img src="./image/call.svg" alt="" className='the__process__container3__image' />
                <input type="text" placeholder='Full Name' className='the__process__container3__inputs' />
            </span>
        </div>
        <div className="process__btn">Next</div>
        
    </>
  )
}

export default Process
