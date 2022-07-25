const App = () => {
  // const selfEsteem =
  //   "Score 85/85 \n \n Вёрстка соответствует макету. Ширина экрана 390px +48 \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n  секция stories +9 \n блок <footer> +6 \n \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n  нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n  при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n адаптивное меню соответствует макету +4 \n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 \n  ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n  при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4";

  // console.log(selfEsteem);

  const state = {
    password: "",
    email: "",
  };

  const menu = document.querySelector("header nav");
  const body = document.querySelector(".page_wrapper");
  const burgerItem = document.querySelector(".burger");
  const signInModal = document.querySelector(".popup");
  const signUpModal = document.querySelector(".signUp");
  const loginButton = document.querySelector(".login_btn");
  const signUpButton = document.querySelector(".signUp_btn");
  const signInButton = document.querySelector(".butt_signIn");
  const close = document.querySelector(".header_nav-close");
  const anchors = document.querySelectorAll('a[href*="#"]');
  const registerBtn = document.querySelector(".third");
  const loginBtn = document.querySelector(".third-login");
  const popupPasswordInput = document.querySelector(".popup_password-input");
  const popupEmailInput = document.querySelector(".popup_email-input");
  const signUpEmailInput = document.querySelector(".signUp_email-input");
  const signUpPasswordInput = document.querySelector(".signUp_password-input");
  const accountLink = document.querySelector(".account_link");

  const openLoginPopup = () => {
    console.log('qq')
    signInModal.style.display = "block";
    signInModal.style.animation = "0.4s ease-out forwards open-modal";
    signUpModal.style.animation = "0.4s ease-out forwards open-modal";
    body.style.filter = "contrast(0.5)";
  };

  const setPopupWindowToRegister = () => {
    state.email = "";
    state.password = "";
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
  };

  const setPopupWindowToLogin = () => {
    state.email = "";
    state.password = "";
    signInModal.style.display = "block";
    signUpModal.style.display = "none";
  };

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

  const closeMenuHandler = (e) => {
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

  const closeModalHandler = (e) => {
    if (signInModal.contains(e.target) || signUpModal.contains(e.target))
      return;

    if (e.target.id !== "login_btn" && e.target.id !== "account_link") {
      if (
        signInModal.style.display === "block" ||
        signUpModal.style.display === "block"
      ) {
        state.email = "";
        state.password = "";
        body.style.filter = "none";
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
      }
    }
  };

  close.addEventListener("click", closeMenuHandler);
  burgerItem.addEventListener("click", navHandler);

  document.addEventListener("click", (e) => closeMenuHandler(e));
  document.addEventListener("click", (e) => closeModalHandler(e));

  loginButton.addEventListener("click", (e) => openLoginPopup(e));

  signInButton.addEventListener("click", () =>
    alert(`Email: ${state.email} Password: ${state.password}`)
  );

  signUpButton.addEventListener("click", () =>
    alert(`Email: ${state.email} Password: ${state.password}`)
  );

  accountLink.addEventListener("click", (e) => openLoginPopup(e));

  registerBtn.addEventListener("click", () => setPopupWindowToRegister());
  loginBtn.addEventListener("click", () => setPopupWindowToLogin());

  

  popupEmailInput.addEventListener("change", (e) => {
    state.email = e.target.value;
  });
  popupPasswordInput.addEventListener("change", (e) => {
    state.password = e.target.value;
  });

  signUpEmailInput.addEventListener("change", (e) => {
    state.email = e.target.value;
  });
  signUpPasswordInput.addEventListener("change", (e) => {
    state.password = e.target.value;
  });
};

document.addEventListener("DOMContentLoaded", App);