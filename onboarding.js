"use strict";

const stripe = Stripe(
  "pk_live_51JBQgYHetP8DM1qkargpRYJLV0avGvfrkhWjwdo9D7ETyJDl2OkVLCNCkzX4loIaz1nvKVBDAnqbkezLCEmAWhd300REWdXvgH",
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
