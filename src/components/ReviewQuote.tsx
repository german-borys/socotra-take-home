import React from 'react';

export default function ReviewQuote() {
    return  <>
    <h3>Your Insurance Quote</h3>
    <div className='Quote-wrapper'>
        <div className='Quote-row centered column'>
            <span className='price'>$89.50</span>
            per month
        </div>
        <div className='Quote-row'>
            <span>Liability Coverage</span>
            <span>$45.20</span>
        </div>
        <div className='Quote-row'>
            <span>Collision Coverage</span>
            <span>$32.10</span>
        </div>
         <div className='Quote-row'>
            <span>Comprehensive Coverage</span>
            <span>$12.20</span>
        </div>
         <div className='Quote-row footer'>
            <span>Total Monthly Premium</span>
            <span>$89.50</span>
        </div>
    </div>
    </>
}