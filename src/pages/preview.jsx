import React from 'react'
import '../styles/pages/preview.scss';

function Preview() {
  return (
    <>
        <img src="./image/path.svg" alt="" className='path4'/>
        <p className="upload">Upload your photo profile</p>
        <p className="content">This data will be displayed in your account profile for security</p>
        <img src="./image/pic.svg" alt="" className="pic" />
        <p className="grave">Replace or edit image</p>
        <p className="next-btn">Next</p>
    </>
  )
}

export default Preview
