import React from 'react';
import { useApplicationData, useApplicationApi } from '../store';

const yearOpts = ['2020', '2021', '2022', '2023'];
const makeOpts = ['Subaru', 'Mercedes', 'BMW'];
const modelOpts = ['base', 'limited']

export default function VehicleInformation() {
    const {vehicleInfo} = useApplicationData();
    const {updateApplication} = useApplicationApi();

    const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newVehicleInfo = {
            ...vehicleInfo,
            [e.target.name]:e.target.value
        }
        updateApplication({vehicleInfo: newVehicleInfo})
    }

    return <>
     <h3>Vehicle Information</h3>
     <div className='Step-form'>
        <div className='Input-wrapper'>
            <span>Year</span>
            <select name='year' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Year</option>
                {yearOpts.map((op, idx) => <option key={idx} value={op} selected={op === vehicleInfo.year?.toString()}>{op}</option>)}
            </select> 
        </div>
         <div className='Input-wrapper'>
            <span>Make</span>
            <select name='make' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Make</option>
                {makeOpts.map((op, idx) => <option key={idx} value={op} selected={op === vehicleInfo.make}>{op}</option>)}
            </select> 
        </div>
         <div className='Input-wrapper'>
            <span>Model</span>
            <select name='model' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Model</option>
                {modelOpts.map((op, idx) => <option key={idx} value={op} selected={op === vehicleInfo.model}>{op}</option>)}
            </select> 
        </div>
         <div className='Input-wrapper'>
            <span>VIN (Vehicle Identification Number)</span>
            <input type='text' maxLength={17} placeholder='17-character VIN'  name='vin' onChange={handleUpdateInput}></input>

        </div>
     </div>
    </>
   
}