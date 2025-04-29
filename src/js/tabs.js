document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-item");
  const contents = document.querySelectorAll("[data-tab-content]");

  function clearActiveTabs() {
    tabs.forEach((tab) => {
      tab.querySelector("p").classList.remove("text-black");
      tab.querySelector("p").classList.add("text-black/40");
    });
  }

  function hideAllContents() {
    contents.forEach((content) => {
      content.style.display = "none";
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = tab.getAttribute("data-tab");

      clearActiveTabs();
      hideAllContents();

      // Aktifkan tab yang diklik
      tab.querySelector("p").classList.remove("text-black/40");
      tab.querySelector("p").classList.add("text-black");

      // Tampilkan content yang cocok
      const contentToShow = document.querySelector(
        `[data-tab-content="${target}"]`
      );
      if (contentToShow) {
        contentToShow.style.display = "flex";
      }
    });
  });

  // Inisialisasi: aktifkan tab pertama
  if (tabs.length > 0) {
    const firstTab = tabs[0];
    const firstTarget = firstTab.getAttribute("data-tab");

    firstTab.querySelector("p").classList.remove("text-black/40");
    firstTab.querySelector("p").classList.add("text-black");

    contents.forEach((content) => {
      content.style.display =
        content.getAttribute("data-tab-content") === firstTarget
          ? "flex"
          : "none";
    });
  }
});
