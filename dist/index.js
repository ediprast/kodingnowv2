const menuBtn = document.querySelector("#menu-btn");
const menuClose = document.querySelector("#menu-close");
const navMenu = document.querySelector("#nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.add("hidden");
  menuClose.classList.remove("hidden");
  navMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", function () {
  menuBtn.classList.remove("hidden");
  menuClose.classList.add("hidden");
  navMenu.classList.add("hidden");
});

const heroSr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true,
});

heroSr.reveal(`.hero-heading`);
heroSr.reveal(`.hero-text`, { delay: 500 });
heroSr.reveal(`.hero-img`, { delay: 800, origin: "bottom" });

const howSr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true,
});

howSr.reveal(`.how-1`);
howSr.reveal(`.how-2`, { delay: 500 });
howSr.reveal(`.how-3`, { delay: 800 });
