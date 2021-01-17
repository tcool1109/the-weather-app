let time = document.querySelector("#time");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

time.innerHTML = `${days[day]} ${hours}:${minutes}`;
function showWeather(response) {
  document.querySelector("#place").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "07e648b4918a63b8fcce58a15798cac7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#search-input").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "07e648b4918a63b8fcce58a15798cac7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

function currentLocationButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentLocation(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let getCurrentLocation = document.querySelector("#current-location-button");
getCurrentLocation.addEventListener("click", currentLocationButton);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 18;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 65;
}

let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", convertToFahrenheit);
searchCity("");
