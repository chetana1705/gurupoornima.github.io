const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
let isOpened = false;

giftBox.addEventListener("click", () => {
  if (isOpened) return;

  const lid = giftBox.querySelector(".lid");
  const ribbon = giftBox.querySelector(".ribbon");

  // Animate lid and ribbon
  lid.style.transform = "rotateX(160deg) translateY(-50px)";
  ribbon.style.opacity = 0;

  // Reveal message after delay
  setTimeout(() => {
    message.style.opacity = 1;
    message.style.transform = "scale(1)";
    nextBtn.style.display = "inline-block";
  }, 1000);

  isOpened = true;
});

// Next Button Click
nextBtn.addEventListener("click", () => {
  // Go to next page (you can change this)
  window.location.href = "page2.html";
});