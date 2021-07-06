const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
// navbar scroll
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  const heroHeight = hero.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-hero-nav");
  }
  if (scrollHeight > heroHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});
