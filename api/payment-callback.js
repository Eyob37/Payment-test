import axios from 'axios';

export default async function handler(req, res) {
  const { order_id, amount_paid, status, transaction_id } = req.body;

  if (status !== 'SUCCESS') {
    return res.status(400).send("Payment failed.");
  }

  try {
    const verify = await axios.post('https://api.touchpay.et/verify', {
      transaction_id
    }, {
      headers: {
        Authorization: 'Bearer YOUR_TOUCHPAY_API_KEY'
      }
    });

    const result = verify.data;

    if (result.status === 'SUCCESS' && parseFloat(result.amount) === 100) {
      return res.status(200).send("<h2>✅ Payment Successful!</h2>");
    } else {
      return res.status(400).send("❌ Verification failed.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error verifying payment.");
  }
                                }
