(function () {
  "use strict";

  var box = document.getElementById("guide-search");
  var input = document.getElementById("guide-search-input");
  var status = document.getElementById("guide-search-status");

  if (!box || !input) {
    return;
  }

  var items = Array.prototype.slice.call(document.querySelectorAll(".guide-item"));
  var groups = Array.prototype.slice.call(document.querySelectorAll(".guide-group"));

  /* Minúsculas y sin tildes, para que "contrasena" encuentre "contraseña" */
  function normalize(text) {
    var lower = text.toLowerCase();
    return lower.normalize ? lower.normalize("NFD").replace(/[̀-ͯ]/g, "") : lower;
  }

  /* Texto donde se busca: título de la guía + palabras clave (data-keywords) */
  var searchable = items.map(function (item) {
    var title = item.querySelector(".guide-item__title");
    return normalize((title ? title.textContent : "") + " " + (item.getAttribute("data-keywords") || ""));
  });

  function filter() {
    var terms = normalize(input.value).split(/\s+/).filter(Boolean);
    var shown = 0;

    items.forEach(function (item, i) {
      var matches = terms.every(function (term) {
        return searchable[i].indexOf(term) !== -1;
      });
      item.hidden = !matches;
      if (matches) {
        shown += 1;
      }
    });

    groups.forEach(function (group) {
      group.hidden = !group.querySelector(".guide-item:not([hidden])");
    });

    if (!terms.length) {
      status.textContent = "";
    } else if (shown === 0) {
      status.textContent = "Ninguna guía coincide con la búsqueda.";
    } else {
      status.textContent = shown + (shown === 1 ? " guía encontrada." : " guías encontradas.");
    }
  }

  /* Sin JS el buscador permanece oculto y se ve el listado completo */
  box.hidden = false;
  input.addEventListener("input", filter);
})();
