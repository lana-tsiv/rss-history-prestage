const App = () => {
  const selfEsteem =
    "Score 85/85 \n \n Вёрстка соответствует макету. Ширина экрана 390px +48 \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n  секция stories +9 \n блок <footer> +6 \n \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n  нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n  при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n адаптивное меню соответствует макету +4 \n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 \n  ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n  при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4";

  console.log(selfEsteem);

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
