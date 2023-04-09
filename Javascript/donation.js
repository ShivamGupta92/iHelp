// JavaScript code to handle the "Donate Now" button click
const stripe = Stripe('your_stripe_api_key');

const donateButton = document.getElementById('donate-button');

donateButton.addEventListener('click', async () => {
  // Create a payment intent
  const response = await fetch('/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: 100 })
  });
  const { clientSecret } = await response.json();

  // Confirm the payment
  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2022,
        cvc: '123'
      }
    }
  });

  if (result.error) {
    // Handle errors
    console.error(result.error);
  } else {
    // Payment succeeded
    console.log(result.paymentIntent);
  }
});
