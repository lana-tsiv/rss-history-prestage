const App = () => {
  const time = document.querySelector(".time");

  setInterval(() => (time.textContent = new Date().toLocaleTimeString()), 1000);

  console.log(time);
};

document.addEventListener("DOMContentLoaded", App);
