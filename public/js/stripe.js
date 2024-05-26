/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';


const stripe = Stripe(
  'pk_test_51L7L3EBmrG5GARK416ByaQb0h70FxSWRYvz3jxr3r0AdiypybHPv0NNDWhyoEPFRxwt5xDfNjNQodNaeEBvHPi8X00wzxXKd0a'
);

export const bookTour = async (tourId) => {
  try {

    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId.tourId}`);

    // 2) Create checkout form + change credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.sessionId,
    });

  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};