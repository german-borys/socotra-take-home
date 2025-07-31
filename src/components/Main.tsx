import React from 'react';
import PersonalInformation from './PersonalInformation';
import AddressDetails from './AddressDetails';
import VehicleInformation from './VehicleInformation';
import CoverageOpts from './CoverageOpts';
import ReviewQuote from './ReviewQuote';
import { useApplicationData } from '../store';
import Navbar from './Navbar';
const pages = [
   'Personal Information',
   'Address Details',
   'Vehicle Information',
   'Coverage Options',
   'Review & Quote'
]

export default function Main() {
    const {activeStep} = useApplicationData();

    console.log('Active Step: ', activeStep);
    let Comp;
    // determine active step component
    switch(activeStep) {
        case 1:
            Comp = AddressDetails;
            break;
        case 2:
            Comp = VehicleInformation;
            break;
        case 3:
            Comp = CoverageOpts;
            break;
        case 4:
            Comp = ReviewQuote;
            break;
        default:
            Comp = PersonalInformation;
    } 

    return <div className='Main-wrapper'>
    <div className='Step-wrapper'>
        <Comp />
        
        </div>
        <Navbar />
    </div>
}