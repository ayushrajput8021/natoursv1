/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51L7KhmAbr34uzSGv7pUYmB9TArnlVT0Ipx2LHOdpsb3iDhGl87J4Pa1UcOfYMYNDqz3LcRIIB7DMIElQohreA4MK00VVIAZC0Q'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId.tourId}`
    );

    // 2) Create checkout form + change credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.sessionId,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
