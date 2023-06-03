import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import OnBoarding from '../pages/onBoarding';
import OnBoarding1 from '../pages/onBoarding1';
import SignInPage from '../pages/signInPage';
import SignUp from '../pages/signUp';
import Process from '../pages/process';
import Payment from '../pages/payment';
import Photo from '../pages/photo';
import Preview from '../pages/preview';
import Location from '../pages/location';
import Success from '../pages/success';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='onboarding1' element={<OnBoarding />} /> 
            <Route path='onboarding2' element={<OnBoarding1 />} />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signin1' element={<SignUp />} />
            <Route path='process' element={<Process />} />
            <Route path='payment' element={<Payment />} />
            <Route path='upload' element={<Photo />} />            
            <Route path='previev' element={<Preview />} />            
            <Route path='location' element={<Location />} /> 
            <Route path='success' element={<Success />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default Router
