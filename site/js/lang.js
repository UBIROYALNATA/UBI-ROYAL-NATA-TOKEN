document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-select button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      fetch(`locales/${lang}.json`)
        .then(res => res.json())
        .then(data => {
          document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.dataset.translate;
            if (data[key]) el.textContent = data[key];
          });
        });
    });
  });
});
