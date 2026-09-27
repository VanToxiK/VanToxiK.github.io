(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var toggleBtn = document.getElementById("theme-toggle");

  function getPreferredTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* localStorage no disponible: se ignora y se usa la preferencia del sistema */
    }
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggleBtn) {
      var isLight = theme === "light";
      toggleBtn.setAttribute("aria-pressed", String(isLight));
      toggleBtn.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
      toggleBtn.textContent = isLight ? "☾" : "☀";
    }
  }

  var currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
      try {
        localStorage.setItem(STORAGE_KEY, currentTheme);
      } catch (e) {
        /* localStorage no disponible: el tema no persiste entre visitas */
      }
    });
  }
})();
