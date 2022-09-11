const App = () => {
  // const selfEsteem =
  //   "Score 85/85 \n \n Вёрстка соответствует макету. Ширина экрана 390px +48 \n блок <header> +6 \n секция preview +9 \n секция steps +9 \n секция destinations +9 \n  секция stories +9 \n блок <footer> +6 \n \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n  нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n \n На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n  при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n адаптивное меню соответствует макету +4 \n при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 \n  ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n  при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4";
  const selfEsteem =
    "Self Esteem Score 125/125 \n \n Слайдер изображений в секции destinations +50 \n на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20 \n Три точки внизу отображают 'номер слайда', то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20 \n Анимации плавного перемещения для слайдера +10 \n \n Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n логин попап соответствует верстке его закрытие происходит при клике вне попапа +25 \n логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25 \n \n Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25";
 
  console.log(selfEsteem);

  const state = {
    email: "",
    password: "",
    sliderOffset: 0,
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

  // ------------------------------------ slider handlers --------------------------------- //

  const slider = document.querySelector(".slider");
  const mobileArrowRight = document.querySelector(".arrow-right");
  const mobileArrowLeft = document.querySelector(".arrow-left");

  const desctopLeftDot = document.querySelector(".pagination_left-dot");
  const desctopMiddleDot = document.querySelector(".pagination_middle-dot");
  const desctopRightDot = document.querySelector(".pagination_right-dot");
  const desctopRightEnding = document.querySelector(".slider_ending-right");
  const desctopLeftEnding = document.querySelector(".slider_ending-left");
  const desctopMiddleEnding = document.querySelector(".slider_ending-middle");

  const desctopLeftSide = document.querySelector(".slider_side-left");
  const desctopRightSide = document.querySelector(".slider_side-right");

  const dotsColorSetter = () => {
    if (Number(slider.style.left.slice(0, -2)) > 0) {
      desctopLeftDot.style.background = "#f2785c";
      desctopRightDot.style.background = "rgba(242, 120, 92, 0.5)";
      desctopMiddleDot.style.background = "rgba(242, 120, 92, 0.5)";
    } else if (Number(slider.style.left.slice(0, -2)) === 0) {
      desctopMiddleDot.style.background = "#f2785c";
      desctopRightDot.style.background = "rgba(242, 120, 92, 0.5)";
      desctopLeftDot.style.background = "rgba(242, 120, 92, 0.5)";
    } else if (Number(slider.style.left.slice(0, -2)) < 0) {
      desctopRightDot.style.background = "#f2785c";
      desctopLeftDot.style.background = "rgba(242, 120, 92, 0.5)";
      desctopMiddleDot.style.background = "rgba(242, 120, 92, 0.5)";
    }
  };

  const rightDotHandler = () => {
    if (Number(body.clientWidth) < 400) {
      state.sliderOffset = state.sliderOffset + 420;
      if (state.sliderOffset > 420) {
        state.sliderOffset = -420;
      }
      slider.style.left = -state.sliderOffset + "px";
      dotsColorSetter();
    } else if (state.sliderOffset < 860) {
      state.sliderOffset = 860;
    }
    slider.style.left = -state.sliderOffset + "px";
    dotsColorSetter();
  };

  const leftDotHandler = () => {
    if (Number(body.clientWidth) < 400) {
      state.sliderOffset = state.sliderOffset - 420;
      if (state.sliderOffset < -420) {
        state.sliderOffset = 420;
      }
      slider.style.left = -state.sliderOffset + "px";
      dotsColorSetter();
    } else if (state.sliderOffset > -860) {
      state.sliderOffset = -860;
    }

    slider.style.left = -state.sliderOffset + "px";
    dotsColorSetter();
  };

  const middleDotHandler = () => {
    if (state.sliderOffset !== 0) {
      state.sliderOffset = 0;
    }

    slider.style.left = 0;
    dotsColorSetter();
  };

  const rightEndingHandler = () => {
    if (state.sliderOffset === 860) {
      state.sliderOffset - 860;
    }

    slider.style.left = state.sliderOffset + "px";
    dotsColorSetter();
  };

  const leftEndingHandler = () => {
    if (state.sliderOffset < 0) {
      state.sliderOffset = 860;
    }

    slider.style.left = -state.sliderOffset + "px";
    dotsColorSetter();
  };

  const middleEndingHandler = () => {
    if (state.sliderOffset !== 0) {
      state.sliderOffset = 0;
    }

    slider.style.left = 0;
    dotsColorSetter();
  };

  const mobileArrowRightHandler = () => {
    state.sliderOffset = state.sliderOffset + 420;
    if (state.sliderOffset > 420) {
      state.sliderOffset = -420;
    }
    slider.style.left = -state.sliderOffset + "px";
    dotsColorSetter();
  };

  const mobileArrowLeftHandler = () => {
    state.sliderOffset = state.sliderOffset - 420;
    if (state.sliderOffset < -420) {
      state.sliderOffset = 420;
    }
    slider.style.left = -state.sliderOffset + "px";
    dotsColorSetter();
  };

  // ------------------------------------ poup handlers --------------------------------- //

  const openLoginPopup = () => {
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

  // ------------------------------------ navigation handlers --------------------------------- //

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

  desctopLeftDot.addEventListener("click", leftDotHandler);
  desctopRightDot.addEventListener("click", rightDotHandler);
  desctopMiddleDot.addEventListener("click", middleDotHandler);

  desctopLeftSide.addEventListener("click", leftDotHandler);
  desctopRightSide.addEventListener("click", rightDotHandler);

  desctopLeftEnding.addEventListener("click", leftEndingHandler);
  desctopRightEnding.addEventListener("click", rightEndingHandler);
  desctopMiddleEnding.addEventListener("click", middleEndingHandler);

  mobileArrowRight.addEventListener("click", mobileArrowRightHandler);
  mobileArrowLeft.addEventListener("click", mobileArrowLeftHandler);

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
