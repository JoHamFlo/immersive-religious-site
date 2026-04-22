const names = document.querySelectorAll(".name-card");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-modal");
const toggleBtn = document.getElementById("toggle-shared");

let showSharedOnly = false;

toggleBtn.addEventListener("click", () => {
  showSharedOnly = !showSharedOnly;

  names.forEach((card) => {
    if (showSharedOnly) {
      card.style.display = card.dataset.shared === "true" ? "block" : "none";
    } else {
      card.style.display = "block";
    }
  });

  toggleBtn.innerText = showSharedOnly
    ? "Show All Names"
    : "Show Shared Only";
});

names.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const arabic = card.dataset.arabic;
    const meaning = card.dataset.meaning;
    const christian = card.dataset.christian;
    const value = card.dataset.value;

    modalContent.innerHTML = `
      <h2>${arabic} — ${title}</h2>
      <h3>Islamic Meaning</h3>
      <p>${meaning}</p>
      <h3>Christian Parallel</h3>
      <p>${christian}</p>
      <h3>Why It Matters</h3>
      <p>${value}</p>
    `;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
