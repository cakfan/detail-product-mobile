function applyDarkModeFromURL() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Panggil fungsi ini saat halaman dimuat
applyDarkModeFromURL();

const button = document.getElementById("show-more-btn");
const hiddenItems = document.querySelectorAll("[data-extra]");
let expanded = false;

button.addEventListener("click", () => {
  expanded = !expanded;
  button.setAttribute("aria-expanded", expanded);

  // Toggle hidden items
  hiddenItems.forEach((item) => {
    item.classList.toggle("hidden", !expanded);
  });

  // Rotate arrow
  button.classList.toggle("rotate-180", expanded);
});

function toggleText() {
  const shortText = document.getElementById("short-text");
  const fullText = document.getElementById("full-text");
  const toggleBtn = document.getElementById("toggle-button");

  const isExpanded = fullText.classList.contains("inline");

  if (isExpanded) {
    shortText.classList.remove("hidden");
    fullText.classList.replace("inline", "hidden");
    toggleBtn.textContent = "Learn More";
  } else {
    shortText.classList.add("hidden");
    fullText.classList.replace("hidden", "inline");
    toggleBtn.textContent = "Learn Less";
  }
}
