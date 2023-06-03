import React from 'react'
import '../styles/pages/location.scss';

function Location() {
  return (
    <>
        <img src="./image/path1.svg" alt="" className="path5" />
        <p className="set">Set your Location</p>
        <p className="cap">This data will be displayed in your account profile for security</p>
        <img src="./image/location.svg" alt="" className="loc" />
        <div className='add'>
            <img src="./image/add.svg" alt="" className="add__image" />
            <p className="add__location">Set your location</p>
        </div>
        <p className="loc-next">Next</p>
    </>
  )
}

export default Location
