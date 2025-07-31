import React from 'react';
import { useApplicationApi } from '../store';

export default function  WelcomeScreen() {
    const {nextStep} = useApplicationApi();
    
    return (
    <div className='Welcome-wrapper'>
    <h1>
        Get the Best Auto Insurance Quote in Minutes 
    </h1>
        <h3>Save up to 40% on your car insurance with personalized quotes from SecureAuto. Trusted by over 2 million drivers nationwide.</h3>
         <div className='Banner-bar'>
            <div className='Banner'>
                <b>3 Minutes</b>
                <span>Quick quote</span>
            </div>
             <div className='Banner'>
                 <b>Up to 40%</b>
                <span>Savings</span>
            </div>
             <div className='Banner'>
                 <b>4.8/5</b>
                <span>Customer rating</span>
            </div>
         </div>
         <button className='start-quote' onClick={nextStep}>Start Free Quote</button>
         <div className='footer'>No spam, no hidden fees. Get your quote in just 3 minutes.</div>
    </div>
   )
}

