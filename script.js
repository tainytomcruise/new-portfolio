gsap.registerPlugin(ScrollTrigger);

/* HORIZONTAL SCROLL TEXT */
gsap.to(".scroll-track", {
  x: -400,
  scrollTrigger: {
    trigger: ".scroll-row",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

/* HERO IMAGE FADE */
gsap.from(".hero-right img", {
  opacity: 0,
  y: 20,
  duration: 1.2,
  ease: "power2.out"
});

/* MENU */
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = () =>
  gsap.to(sideMenu, { x: "0%", duration: 0.6, ease: "power4.out" });

closeMenu.onclick = () =>
  gsap.to(sideMenu, { x: "100%", duration: 0.6, ease: "power4.out" });

document.querySelectorAll(".side-menu a").forEach(link => {
  link.onclick = () => {
    const target = document.querySelector(link.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
    gsap.to(sideMenu, { x: "100%" });
  };
});

/* DARK MODE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* CONTACT FORM (FAKE SUBMIT) */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    contactForm.reset();
  });
}
