const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modalOverlay");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});

const openQuoteBtn = document.getElementById("openQuoteModal");
const closeQuoteBtn = document.getElementById("closeQuoteModal");
const quoteModal = document.getElementById("quoteModal");

openQuoteBtn.addEventListener("click", () => {
  quoteModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeQuoteBtn.addEventListener("click", () => {
  quoteModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if(e.target === quoteModal){
    quoteModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});