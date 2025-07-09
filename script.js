whatsappBtn.addEventListener("click", () => {
  count++;
  counterText.innerText = `Click count: ${count}/5`;

  // Open WhatsApp in a new tab
  window.open("https://wa.me/?text=Hey%20Buddy,%20Join%20Tech%20For%20Girls%20Community!", "_blank");

  // Direct fallback
  setTimeout(() => {
    if (!document.hasFocus()) return; // means new tab opened
    window.location.href = "https://wa.me/?text=Hey%20Buddy,%20Join%20Tech%20For%20Girls%20Community!";
  }, 1000);

  if (count >= 5) {
    whatsappBtn.disabled = true;
    counterText.innerText = "Sharing complete. Please continue.";
    submitBtn.disabled = false;
  }
});