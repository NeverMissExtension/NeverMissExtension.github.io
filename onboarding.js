"use strict";

const stripe = Stripe(
  "pk_test_51JBQgYHetP8DM1qkVBYUQCa3mvtECzRJezt82Cr5awqvjZX1SOv44Edm70ZYHDLq4r67LZFyLdOdPF0roisdkREu00ABUQ2HSb",
); // your publishable key

document.querySelector(".btn").addEventListener("click", async () => {
  const res = await fetch(
    "https://nevermissbackend.onrender.com/create-checkout-session",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    },
  );

  const data = await res.json();

  const result = await stripe.redirectToCheckout({
    sessionId: data.sessionId,
  });

  if (result.error) {
    console.error(result.error.message);
  }
});
