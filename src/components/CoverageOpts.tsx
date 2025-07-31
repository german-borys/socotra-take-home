import React from 'react';
import { useApplicationData, useApplicationApi } from '../store';

const typeOpts = ['Liability Only', 'Standard Coverage', 'Full Coverage'];
const liabilityLimits = ['$25K/$50K/$25K','$50K/$75K/$50K', '$75K/$100K/$75K'];
const deductibleOpts = ['$250', '$500', '$1000'];

export default function CoverageOpts() {
    const {coverageOpts} = useApplicationData();
    console.log('coverageOpts', coverageOpts);
    const {updateApplication} = useApplicationApi();

    const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newCoverageOpts = {
            ...coverageOpts,
            [e.target.name]:e.target.value
        }
        updateApplication({coverageOpts: newCoverageOpts})
    }

    return <>
     <h3>Coverage Options</h3>
     <div className='Step-form'>
        <div className='Input-wrapper'>
            <span>Coverage Type</span>
            <select name='type' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Select coverage type</option>
                {typeOpts.map((op, idx) => <option key={idx} value={op} selected={op === coverageOpts.type}>{op}</option>)}
            </select> 
        </div>
         <div className='Input-wrapper'>
            <span>Liability Limits</span>
             <select name='liabilityLimits' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Select limits</option>
                {liabilityLimits.map((op, idx) => <option key={idx} value={op} selected={op === coverageOpts.liabilityLimits}>{op}</option>)}
            </select> 
         </div>
        <div className='Input-wrapper'>
            <span>Collision Deductible</span>
             <select name='collisionLimits' onChange={handleUpdateInput}>
                <option value="" disabled selected hidden>Select deductible</option>
                {deductibleOpts.map((op, idx) => <option key={idx} value={op} selected={op === coverageOpts.collisionLimits}>{op}</option>)}
            </select> 
         </div>

     </div>
    </>
   
}