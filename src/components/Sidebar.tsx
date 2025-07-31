import React from 'react';
import { useApplicationData } from '../store';
import pages from '../pageData';

export default function Sidebar() {
    const {activeStep} = useApplicationData();
    const pageIdx = activeStep ? activeStep + 1 : 1;
    
    return <div className='Sidebar'>
       <div className='SidebarHdr'>
         <h3>Quote Progress</h3>
         <span>{`Step ${pageIdx} of ${pages.length}`}</span>
        </div>
     {pages.map((page, idx) => <div key={idx} className={`SidebarItem ${activeStep === idx && 'active'} ${activeStep ? activeStep > idx && 'completed' : ''}`}>{`${idx +1} ${page}`}</div>)}
    <progress id="file" value={pageIdx} max="5"></progress>
    </div>
}