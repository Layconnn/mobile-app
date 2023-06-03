import React from 'react'
import '../styles/pages/payment.scss';

function Payment() {
  return (
    <>
        <img src="./image/path.svg" alt="" className="path4" />
        <p className="how">Payment Method</p>
        <p className="content">This data will be displayed in your account profile for security</p>
        <div className='payment-type'>
            <div className="payment-type__one">
                <img src="./image/pal.svg" alt="" className="payment-type__one__pay-pal" />
            </div>
            <div className="payment-type__two">
                <img src="./image/visa.svg" alt="" className="payment-type__one__visa" />
            </div>
            <div className="payment-type__three">
                <img src="./image/pay.svg" alt="" className="payment-type__one__moment" />
            </div>
        </div>
        <div className='process__btn'>Next</div>
    </>
  )
}

export default Payment
