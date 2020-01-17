import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_vNgA2Nz7lrlwRjBdGNJ8MDL9';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      currency='GBP'
      label='Pay Now'
      name='React Commerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
