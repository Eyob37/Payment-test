export default function handler(req, res) {
  const orderId = 'order123';
  const amount = 100;

  const telebirrURL = `https://touchpay.et/pay?amount=${amount}&order_id=${orderId}&callback_url=https://payment-test-lime.vercel.app/api/payment-callback`;

  res.status(200).json({ url: telebirrURL });
}