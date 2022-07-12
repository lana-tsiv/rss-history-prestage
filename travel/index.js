const App = () => {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector("header nav");
  const close = document.querySelector(".header_nav-close");
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  const navHandler = () => menu.classList.add("active");
  const closeHandler = () => menu.classList.remove("active");

  burgerItem.addEventListener("click", navHandler);
  close.addEventListener("click", closeHandler);
};

document.addEventListener("DOMContentLoaded", App);
