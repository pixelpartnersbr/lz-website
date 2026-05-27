/* ========================================
   LZ MARINE — Behaviors
   ======================================== */

// 1) Header — adiciona classe ao rolar
(function () {
  const header = document.querySelector(".header");
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// 2) Mobile menu toggle
(function () {
  const btn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-mobile");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  });
  // Fechar ao clicar em link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

// 3) Scroll reveal — IntersectionObserver
(function () {
  const els = document.querySelectorAll(
    ".reveal, .reveal-scale, .reveal-x-left, .reveal-x-right",
  );
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
  );
  els.forEach((el) => io.observe(el));
})();

// 4) Form de contato → WhatsApp
(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const text =
      `Olá, LZ Marine! Sou ${name}` +
      (phone ? ` (${phone})` : "") +
      (message ? `.\n\n${message}` : ".");
    window.open(
      `https://wa.me/5527997957083?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  });
})();

// 5) Duplicar marquee para loop perfeito
(function () {
  const track = document.querySelector(".marquee-track");
  if (!track) return;
  const clone = track.innerHTML;
  track.innerHTML = clone + clone;
})();

// 6) Ano dinâmico no footer
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
