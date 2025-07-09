let count = 0;
const counterText = document.getElementById("counterText");
const whatsappBtn = document.getElementById("whatsappShare");
const submitBtn = document.getElementById("submitBtn");

console.log("Script loaded and running...");

whatsappBtn.addEventListener("click", () => {
  count++;
  counterText.innerText = `Click count: ${count}/5`;

  window.open("https://wa.me/?text=Hey%20Buddy,%20Join%20Tech%20For%20Girls%20Community!", "_blank");

  if (count >= 5) {
    whatsappBtn.disabled = true;
    counterText.innerText = "Sharing complete. Please continue.";
    submitBtn.disabled = false;
  }
});
