import React from 'react';

export default function SubmittedScreen() {
    return  (<div className='Submitted-wrapper'>
        <h1>Application Submitted Success</h1>
        <h3>Thank you for choosing our insurance services. Your application has been received and is being processed.</h3>
        <div className='Rounded-box'>
            <h4>What happens next?</h4>
              <ul>
            <li>Our licensed insurance agents will review your application within 24 hours</li>
       <li>You'll receive an email with your personalized quote and policy options

</li>
<li>An agent will contact you to finalize your coverage and answer any questions</li>
        </ul>
        </div>
      <div className='footer'>
        Questions? Contact us at <a href=''>1-800-INSURANCE</a> or <a href='support@insurance.com'>support@insurance.com</a>
      </div>
    </div>)
   

}