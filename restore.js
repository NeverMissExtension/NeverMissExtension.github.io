"use strict";

document.querySelector(".restore").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  try {
    const response = await fetch(
      "https://nevermissbackend.onrender.com/restore-customer",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      },
    );

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    // Redirect to success page with customer_id
    window.location.href = `success.html?customer_id=${data.customerId}`;
  } catch (err) {
    alert("Something went wrong. Try again.");
    console.error(err);
  }
});
