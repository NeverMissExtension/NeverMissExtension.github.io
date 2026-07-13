document.querySelector(".manage").addEventListener("click", async () => {
    const customerId = localStorage.getItem("customerId");

    if (!customerId) {
        alert("No customer ID found. Please restore your account first.");
        return;
    }

    try {
        const response = await fetch("https://nevermissbackend.onrender.com/create-portal-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerId })
        });

        const data = await response.json();

        if (!data.url) {
            alert("Could not open billing portal. Try again.");
            console.log("Portal error:", data);
            return;
        }

        window.location.href = data.url;

    } catch (err) {
        alert("Something went wrong. Try again.");
        console.error(err);
    }
});
