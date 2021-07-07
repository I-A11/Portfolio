const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const logo = document.querySelector(".fa-robot");
// navbar scroll
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  const heroHeight = hero.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-hero-nav");
    logo.style.color = "white";
  }
  if (scrollHeight > heroHeight) {
    nav.classList.add("fixed-nav");
    logo.style.color = "#a9a9a9";
  } else {
    nav.classList.remove("fixed-nav");
    logo.style.color = "white";
  }
});
