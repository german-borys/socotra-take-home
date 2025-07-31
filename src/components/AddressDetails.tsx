import React from 'react';
import { useApplicationData, useApplicationApi } from '../store';

const stateNames = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function AddressDetails() {
    const {address} = useApplicationData();
    console.log('address', address);
    const {updateApplication} = useApplicationApi();

    const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newAddress = {
            ...address,
            [e.target.name]:e.target.value
        }
        updateApplication({address: newAddress})
    }

    return <>
     <h3>Address Details</h3>
     <div className='Step-form'>
        <div className='Input-wrapper'>
            <span>Street</span>
        <input type='text' placeholder='123 Main Street' name='street' value={address.street} onChange={handleUpdateInput}></input>
        </div>
        <div className='Input-wrapper'>
            <span>City</span>
        <input type='text' placeholder='City'  name='city' value={address.city} onChange={handleUpdateInput}></input>
        </div>
 <div className='Input-wrapper'>
            <span>State</span>
             <select name='state' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Select state</option>
                {stateNames.map((op, idx) => <option key={idx} value={op} selected={op === address.state}>{op}</option>)}
            </select> 
         </div>
         <div className='Input-wrapper'>
            <span>Zip code</span>
        <input type='text' placeholder='12345'  name='zip' value={address.zip?.toString()} onChange={handleUpdateInput}></input>
        </div>
     </div>
    </>
   
}