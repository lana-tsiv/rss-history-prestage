const App = () => {
  const time = document.querySelector(".time");
  const date = document.querySelector(".date");
  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  setInterval(() => (time.textContent = new Date().toLocaleTimeString()), 1000);
  setInterval(
    () => (
      (date.textContent = new Date().toLocaleDateString("en-EN", options)),
      60000
    )
  );

  console.log(date);
};

document.addEventListener("DOMContentLoaded", App);
