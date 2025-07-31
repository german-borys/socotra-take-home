import React from 'react';
import { useApplicationApi, useApplicationData } from '../store';
export default function Navbar() {
    const {activeStep} = useApplicationData();
    const {nextStep, prevStep, submitApplication} = useApplicationApi();

    const lastStep = activeStep === 4;
    const nextCallback = lastStep ? submitApplication : nextStep;

    return <div className='Navbar'>
        <button className='previous' onClick={prevStep}>Previous</button>
        <button className={lastStep ? 'submit' : 'next'} onClick={nextCallback}>{lastStep ? 'Submit Application': 'Continue'}</button>
    </div>
}