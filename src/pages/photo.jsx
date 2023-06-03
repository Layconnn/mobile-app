import React from 'react'
import '../styles/pages/photo.scss';

function Photo() {
  return (
    <>
        <img src="./image/path.svg" alt="" className="path1" />
        <p className="upload">Upload your photo profile</p>
        <img src="./image/mount.svg" alt="" className="mount" />
        <div className="change">
            <p className="change__organize">Organize your file easily</p>
            <p className="change__cap">This data will be displayed in your account profile for security</p>
            <div className="change__select">Select Photo</div>
        </div>
        <div className='photo-btn'>Next</div>
    </>
  )
}

export default Photo