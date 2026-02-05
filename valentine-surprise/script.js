const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 300;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function goYes() {
  window.location.href = "yes.html";
}
