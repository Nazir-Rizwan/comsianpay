import StripeCheckout from 'react-stripe-checkout';
import React from 'react'
import './Stripe.css';
import { NavLink } from 'react-router-dom';

const OnToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

const Stripepay = () => {
  return (
    <>
    <div className='start'>


<h1>Pay Now </h1>


<div className='center'>
 <StripeCheckout
        token={OnToken}
        stripeKey="pk_test_51MP3ZzDomXvZ8VXpAakpoV5Y51MGBtJD3tCe24dWGCbmydpTcJfCPcUDpZM9OA1ipkAlEU4DlRZVMPmGD1dKw4oH00LGVOxsei"
      />  
      <NavLink to="/">
    <button >Home Page </button>
    
    </NavLink> 
</div>
</div>


    </>
  )
}

export default Stripepay