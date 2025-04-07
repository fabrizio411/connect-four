export const handleRules = () => {
  const rulesModal = document.querySelector("#rules-modal");
  const openBtn = document.querySelector("#rules-open-btn");
  const closeBtn = document.querySelector("#rules-close-btn");
  const overlay = document.querySelector("#rules-overlay");

  console.log(openBtn);

  function openRules() {
    rulesModal.style.display = "grid";
  }

  function closeRules() {
    rulesModal.style.display = "none";
  }

  openBtn.addEventListener("click", openRules);
  closeBtn.addEventListener("click", closeRules);
  overlay.addEventListener("click", closeRules);
};
