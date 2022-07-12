const App = () => {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector("header nav");
  const close = document.querySelector(".header_nav-close");
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = anchor?.getAttribute("href").replace("#", "");

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  const navHandler = () => menu.classList.add("active");
  const closeHandler = (e) => {
    if (
      e.target.id !== "nav" &&
      e.target.id !== "burger" &&
      e.target.id !== "burger-line1" &&
      e.target.id !== "burger-line2" &&
      e.target.id !== "burger-line3"
    ) {
      menu.classList.remove("active");
    }

    if (e.target.id === "close") {
      menu.classList.remove("active");
    }
  };

  close.addEventListener("click", closeHandler);
  burgerItem.addEventListener("click", navHandler);
  document.addEventListener("click", (e) => closeHandler(e));
};

document.addEventListener("DOMContentLoaded", App);
