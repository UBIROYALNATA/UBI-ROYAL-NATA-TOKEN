const langButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-translate]");
function loadLang(lang) {
  fetch(`locales/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      translatable.forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = data[key] || "";
      });
    });
}
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    localStorage.setItem("lang", lang);
    loadLang(lang);
  });
});
const userLang = localStorage.getItem("lang") || navigator.language.slice(0, 2);
loadLang(["en", "tr", "ko", "ar", "fr"].includes(userLang) ? userLang : "en");