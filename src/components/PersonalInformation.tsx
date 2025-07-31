import React from 'react';
import { useApplicationData, useApplicationApi } from '../store';
export default function PersonalInformation() {
    const {personalInfo} = useApplicationData();
    console.log('personalInfo', personalInfo);
    const {updateApplication} = useApplicationApi();

    const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPersonalInfo = {
            ...personalInfo,
            [e.target.name]:e.target.value
        }
        updateApplication({personalInfo: newPersonalInfo})
    }

    return <>
     <h3>Personal Information</h3>
     <div className='Step-form'>
        <div className='Input-wrapper'>
            <span>First Name</span>
        <input type='text' placeholder='Enter your first name' value={personalInfo.firstName} name='firstName' onChange={handleUpdateInput}></input>
        </div>
        <div className='Input-wrapper'>
            <span>Last Name</span>
        <input type='text' placeholder='Enter your last name' value={personalInfo.lastName}  name='lastName' onChange={handleUpdateInput}></input>
        </div>
        <div className='Input-wrapper'>
            <span>Email</span>
        <input type='text' placeholder='your.email@example.com' value={personalInfo.email}  name='email' onChange={handleUpdateInput}></input>
        </div>
        <div className='Input-wrapper'>
            <span>Phone number</span>
        <input type='text' placeholder='(555) 123-4567' value={personalInfo.phone}  name='phone' onChange={handleUpdateInput}></input>
        </div>
        <div className='Input-wrapper'>
            <span>Date of Birth</span>
        <input type='date' placeholder='mm/dd/yyyy' value={personalInfo.dob}  name='dob' onChange={handleUpdateInput}></input>
        </div>
     </div>
    </>
   
}