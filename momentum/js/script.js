const App = () => {
  const time = document.querySelector(".time");
  const date = document.querySelector(".date");
  const greeting = document.querySelector(".greeting");
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const city = document.querySelector(".city");
  const name = document.querySelector(".name");
  const changeQuote = document.querySelector(".change-quote");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");

  console.log(name);

  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  setInterval(() => (time.textContent = new Date().toLocaleTimeString()), 1000);

  setInterval(() => {
    const hours = new Date().getHours();

    if (hours < 12 && hours >= 6) {
      return (greeting.textContent = "Good morning");
    }
    if (hours >= 12 && hours < 18) {
      return (greeting.textContent = "Good afternoon");
    }
    if (hours >= 18 && hours < 23) {
      return (greeting.textContent = "Good evening");
    }
    if (hours >= 23 || hours < 6) {
      return (greeting.textContent = "Good night");
    }
  }, 1000);

  setInterval(
    () => (date.textContent = new Date().toLocaleDateString("en-EN", options)),
    60000
  );

  function setLocalStorage() {
    localStorage.setItem("name", name.value);
  }
  window.addEventListener("beforeunload", setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem("name")) {
      name.value = localStorage.getItem("name");
    }
  }
  window.addEventListener("load", getLocalStorage);

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=5defd750dbc99ff8159b076f2bf66e9d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }

  function setCity(event) {
    console.log(event);
    if (!event || event.code === "Enter") {
      getWeather();
      city.blur();
    }
  }
  setCity();
  city.addEventListener("keypress", setCity);

  const getQuotes = async () => {
    const quotes = "data.json";
    const res = await fetch(quotes);
    const data = await res.json();

    if (!quote.textContent && !author.textContent) {
      quote.textContent = data[0].text;
      author.textContent = data[0].author;
      return;
    }

    if (
      quote.textContent === data[0].text &&
      author.textContent === data[0].author
    ) {
      quote.textContent = data[1].text;
      author.textContent = data[1].author;
      return;
    }

    if (
      quote.textContent === data[1].text &&
      author.textContent === data[1].author
    ) {
      quote.textContent = data[2].text;
      author.textContent = data[2].author;
      return;
    }

    if (
      quote.textContent === data[2].text &&
      author.textContent === data[2].author
    ) {
      quote.textContent = data[0].text;
      author.textContent = data[0].author;
      return;
    }
  };
  getQuotes();
  changeQuote.addEventListener("click", getQuotes);
};

document.addEventListener("DOMContentLoaded", App);
