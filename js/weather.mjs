// import { obj, foo } from './clock.mjs';
// console.log(obj);
// foo();
const API_KEY = "64bb4412769a73988b668782663bd5f7";
const week = ["일", "월", "화", "수", "목", "금", "토"];
const date = new Date();
const today = date.getDay();

const $weather = document.getElementById("weather");
const $forecast = $weather.querySelector(".forecast");
const $currently = $weather.querySelector(".currently");
const $currentlyBtn = $weather.querySelector(".currently_btn");
const $city_select = $weather.querySelector(".city_select");

const $weatherContents = $forecast.querySelectorAll(".weather_content");
const $weatherIcons = $forecast.querySelectorAll(".weather_icon");
const $temps = $forecast.querySelectorAll(".temp");
const $dayNmaes = $forecast.querySelectorAll(".day_name");

function geoSuccess(position) {
  const { coords } = position;
  const lat = coords.latitude;
  const lng = coords.longitude;
  $currentlyBtn.addEventListener("click", () => {
    getWeatherAll(lat, lng);
  });

  function getJson(fetchStr) {
    return fetch(fetchStr)
    .then(res => res.json())
    .then(jsonData => jsonData);
  }
  async function getWeatherAll(lat, lng) {
    let weatherData;
    let cityData;
    let koreaCityData;
    weatherData = await getJson(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`);
    console.log(weatherData);
    async function weatherRender(weatherData) {
      const { daily, hourly } = weatherData;
      console.log(daily, hourly);
      $weatherContents.forEach((_, i) => {
        switch (daily[i].weather[0].main) {
          case "Thunderstorm":
            $weatherIcons[i].className = 'wi wi-lightning';
            break;
          case "Rain":
          case "Drizzle":
            $weatherIcons[i].className = 'wi wi-rain';
            break;
          case "Snow":
            $weatherIcons[i].className = 'wi wi-snowflake-cold';
            break;
          case "Mist":
          case "Smoke":
          case "Haze":
          case "Dust":
          case "Fog":
          case "Sand":
          case "Dust":
          case "Ash":
          case "Squall":
          case "Tornado":
            $weatherIcons[i].className = 'wi wi-fog';
            break;
          case "Clear":
            $weatherIcons[i].className = 'wi wi-day-sunny';
            break;
          case "Clouds":
            $weatherIcons[i].className = "wi wi-cloudy";
            break;
          default:
            $weatherIcons[i].className = 'wi wi-refresh';
        }
        $temps[i].textContent = `${daily[i].temp.min}°C / ${daily[i].temp.max}°C`;
        $dayNmaes[i].textContent = week[(today + i) === 7 ? 0 : (today + i) === 8 ? 1 : (today + i) === 9 ? 2 : (today + i) === 10 ? 3 : today + i];
        $dayNmaes[0].textContent = "ToDay";
      });
    }
    weatherRender(weatherData);
    cityData = await getJson(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);
    console.log(cityData);
    async function cityRender(cityData) {
      $currently.textContent = cityData.name;
    }
    cityRender(cityData);
    koreaCityData = await getJson('../json/cityKR.list.json');
    console.log(koreaCityData);
    $city_select.addEventListener("change", async ( { target }) => {
      const cityObj = koreaCityData.filter(city => city.name === target.value);
      const { coord } = cityObj[0];
      const { lat, lon } = coord;
      getWeatherAll(lat, lon);
    });
  }
  getWeatherAll(lat, lng);
}
function geoError() {
  $weatherContents.forEach(content => content.textContent = "데이터를 가져올 수 없습니다.")
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}
function init() {
  askForCoords();
}
init();
