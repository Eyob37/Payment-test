async function startPayment() {
  const res = await fetch('/api/start-payment');
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Failed to start payment.");
  }
}
