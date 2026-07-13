"use strict";

// Return button
document.querySelector(".return").addEventListener("click", () => {
  window.location.href = "https://nevermissextension.github.io/";
});

// Read URL params
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get("session_id");
const restoredCustomerId = urlParams.get("customer_id");

// Restore flow (existing subscriber)
if (restoredCustomerId) {
  localStorage.setItem("customerId", restoredCustomerId);
  console.log("Restored customer ID:", restoredCustomerId);
}

// New subscription flow (Stripe Checkout)
else if (sessionId) {
  fetch(`https://nevermissbackend.onrender.com/session-info/${sessionId}`)
    .then((res) => res.json())
    .then((data) => {
      // FIXED: Save data.customerId, not restoredCustomerId
      localStorage.setItem("customerId", data.customerId); 
      console.log("Saved customer ID:", data.customerId);
    })
    .catch((err) => console.error("Failed to fetch session info:", err));
}
