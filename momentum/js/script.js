const App = () => {
  console.log("50, сделаны пункты 1, 2, 4, 5. Дата выводится, необходимо подождать");

  const time = document.querySelector(".time");
  const date = document.querySelector(".date");
  const greeting = document.querySelector(".greeting");
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  const weatherDescription = document.querySelector(".weather-description");
  const city = document.querySelector(".city");
  const name = document.querySelector(".name");
  const changeQuote = document.querySelector(".change-quote");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");

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
    if (hours >= 18 && hours < 24) {
      return (greeting.textContent = "Good evening");
    }
    if (hours >= 24 || hours < 6) {
      return (greeting.textContent = "Good night");
    }
  }, 1000);

  setInterval(
    () => (date.textContent = new Date().toLocaleDateString("en-EN", options)),
    60000
  );

  const setLocalStorage = () => {
    localStorage.setItem("name", name.value);
    localStorage.setItem("city", city.value);
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("name")) {
      name.value = localStorage.getItem("name");
    }
    if (localStorage.getItem("city")) {
      city.value = localStorage.getItem("city");
    }
  };

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=5defd750dbc99ff8159b076f2bf66e9d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
      alert("the data was entered incorrectly");
    }
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.ceil(data.main.humidity)}%`;
  };

  const setCity = (event) => {
    if (!event || event.code === "Enter") {
      getWeather();
      city.blur();
    }
  };

  setCity();

  const getQuotes = async () => {
    const quotes = "data.json";
    const res = await fetch(quotes);
    const data = await res.json();

    if (!quote.textContent && !author.textContent) {
      const num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

      quote.textContent = data[num].text;
      author.textContent = data[num].author;
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

  window.addEventListener("beforeunload", setLocalStorage);
  window.addEventListener("load", getLocalStorage);
  changeQuote.addEventListener("click", getQuotes);
  city.addEventListener("keypress", setCity);
};

document.addEventListener("DOMContentLoaded", App);
