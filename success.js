"use strict";

document.querySelector(".return").addEventListener("click", () => {
  window.location.href = "https://nevermissextension.github.io/";
});

// 1. Read session_id from URL
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get("session_id");

// 2. Fetch customerId from backend
if (sessionId) {
  fetch(`https://nevermissbackend.onrender.com/session-info/${sessionId}`)
    .then((res) => res.json())
    .then((data) => {
      // 3. Save customerId for the extension
      localStorage.setItem("customerId", data.customerId);

      console.log("Saved customer ID:", data.customerId);

      // 4. Update the page text
      const msg = document.getElementById("statusMessage");
      msg.textContent = "Your subscription is now active!";
    })
    .catch((err) => console.error("Failed to fetch session info:", err));
}
