/* Data Day 2027 — accessible nav dropdowns.
   Click to toggle; closes on Escape, outside-click, and focus leaving the menu.
   Arrow keys move between items. No dependencies. */
(function () {
  "use strict";

  var menus = Array.prototype.slice.call(document.querySelectorAll(".navitem--menu"));
  if (!menus.length) return;

  function panelOf(menu) { return menu.querySelector(".navmenu"); }
  function btnOf(menu) { return menu.querySelector(".navitem__btn"); }
  function itemsOf(menu) {
    return Array.prototype.slice.call(menu.querySelectorAll("a.navmenu__item"));
  }

  function close(menu) {
    btnOf(menu).setAttribute("aria-expanded", "false");
    panelOf(menu).removeAttribute("data-open");
  }
  function open(menu) {
    btnOf(menu).setAttribute("aria-expanded", "true");
    panelOf(menu).setAttribute("data-open", "true");
  }
  function closeAll(except) {
    menus.forEach(function (m) { if (m !== except) close(m); });
  }

  menus.forEach(function (menu) {
    var btn = btnOf(menu);
    var items = itemsOf(menu);

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      closeAll(menu);
      if (isOpen) { close(menu); } else { open(menu); }
    });

    btn.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        closeAll(menu);
        open(menu);
        if (items[0]) items[0].focus();
      }
    });

    menu.addEventListener("keydown", function (e) {
      var idx = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (items[idx + 1]) items[idx + 1].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (idx > 0) { items[idx - 1].focus(); }
        else { btn.focus(); }
      } else if (e.key === "Escape") {
        close(menu);
        btn.focus();
      }
    });

    // Close when focus moves outside this menu (e.g. Tab out).
    menu.addEventListener("focusout", function (e) {
      if (!menu.contains(e.relatedTarget)) { close(menu); }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navitem--menu")) { closeAll(null); }
  });
})();

/* Data Day 2027 — minimizable site announcement banner.
   Minimized state is remembered per banner via its data-banner-id, so
   swapping in a new announcement (new id) shows expanded again for everyone. */
(function () {
  "use strict";

  var banner = document.getElementById("announceBanner");
  if (!banner) return;

  var id = banner.getAttribute("data-banner-id") || "default";
  var minKey = "dd-banner-min-" + id;

  var minimized = false;
  try { minimized = !!localStorage.getItem(minKey); } catch (e) {}

  var toggleBtn = banner.querySelector(".announce-banner__toggle");

  function setMinimized(state) {
    banner.classList.toggle("is-minimized", state);
    toggleBtn.setAttribute("aria-expanded", state ? "false" : "true");
    toggleBtn.setAttribute("aria-label", state ? "Expand announcement" : "Minimize announcement");
  }

  setMinimized(minimized);

  toggleBtn.addEventListener("click", function () {
    var state = !banner.classList.contains("is-minimized");
    setMinimized(state);
    try {
      if (state) { localStorage.setItem(minKey, "1"); } else { localStorage.removeItem(minKey); }
    } catch (e) {}
  });
})();
