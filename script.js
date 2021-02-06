

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

function searchCity(city) {
  let apiKey = "07e648b4918a63b8fcce58a15798cac7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-line").value;
  searchCity(city);
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);


function displayTemperature (response) {
  let temperatureElement= document.querySelector ("#temperature");
  temperatureElement.innerHTML= response.data.main.temp
let apiKey = "07e648b4918a63b8fcce58a15798cac7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}


function showWeather(response) {
  
  let placeElement= document.querySelector("#place");
  let descriptionElement= document.querySelector("#description");
 let humidityElement= document.querySelector ("#humidity");
 let windElement= document.querySelector ("#wind"); 
 let iconElement=document.querySelector ("#icon");
 let temperatureElement=document.querySelector ("#temperature");
 fahrenheitTemperature. response.data.main.temp
 document.querySelector ("#icon");
  document.querySelector ("#description");
  document.querySelector ("#humidity");
  document.querySelector("#place").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp);
  placeElement.innerHTML=response.data.name;
 temperatureElement.innerHTML = Math.round(response.data.main.temp, descriptionElement.innerHTML=response.data.weather[0].description,)
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML= Math.round (response.data.wind.speed);  
iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

fahrenheitTemperature= null;
function displayCelsiusTemperature (event) {
  event.preventDefault();
  
  let celsiusTemperature= (fahrenheitTemperature − 32) / 1.8; 
  
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML= Math.round (celsiusTemperature);
}

let celsiusLink= document.querySelector("#celsius-link");
celsiusLink.addEventListener ("click", displayCelsiusTemperature);

function displayFahrenheitTemperature (event) {
event.preventDefault ()
let temperatureElement =document.querySelector ("#temperature")
temperatureElement.innerHTML= Math.round (fahrenheitTemperature);

}

  let fahrenheitLink= document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener ("click", displayFahrenheitTemperature);



















