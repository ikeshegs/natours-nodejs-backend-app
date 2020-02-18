/*eslint-disable*/
import axios from 'axios';

import { showAlert } from './alerts';

const stripe = Stripe('pk_test_QFgUx1AaFDb3g0wB77arFtRF00WJiaouMU');

export const bookTour = async tourId => {
  try {
    const session = await axios (`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });

  } catch (err) {
    showAlert('error', err);
  }
};
