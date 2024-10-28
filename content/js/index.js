let todayNameInput = document.getElementById("todayName");
let todayDateInput = document.getElementById("todayDate");
let todayMonthInput = document.getElementById("todayMonth");
let todayLocationInput = document.getElementById("todayLocation");
let todayDegreeInput = document.getElementById("todayDegree");
let todayWeatherImgInput = document.getElementById("todayWeatherImg");
let customTodayInput = document.getElementById("customToday");
let todayhumidityInput = document.getElementById("todayhumidity");
let todayWindInput = document.getElementById("todayWind");
let todayWindDirInput = document.getElementById("todayWindDir");

let searchInput = document.getElementById("search");
//////////////////////////////////////
let nextDaysIconInput = document.querySelectorAll(".nextDaysIcon");
let nextHighInput = document.querySelectorAll(".nextHigh");
let nextLowInput = document.querySelectorAll(".nextLow");
let nextCustom = document.querySelectorAll(".nextCustom");
let nextDayInput = document.querySelectorAll(".nextDay");
let today = new Date();

async function getWeather(search) {
  let myResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3c4f7b7354204eaca45195233242810&q=${search}&days=3`
  );
  console.log(myResponse);
  let myWeather = await myResponse.json();
  return myWeather;
}
function displayWeather(data) {
  todayNameInput.innerHTML = today.toLocaleDateString("en-US", {
    weekday: "long",
  });
  todayDateInput.innerHTML = today.getDate();
  todayMonthInput.innerHTML = today.toLocaleDateString("en-US", {
    month: "long",
  });
  todayLocationInput.innerHTML = data.location.name;
  todayDegreeInput.innerHTML = data.current.temp_c;
  todayWeatherImgInput.setAttribute("src", data.current.condition.icon);
  customTodayInput.innerHTML = data.current.condition.text;
  todayhumidityInput.innerHTML = data.current.humidity;
  todayWindInput.innerHTML = data.current.wind_kph;
  todayWindDirInput.innerHTML = data.current.wind_dir;
}

function displayNextDay(data) {
  let nextDays = data.forecast.forecastday;
  for (let i = 0; i < 2; i++) {
    let nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i + 1);
    console.log(nextDate);
    nextHighInput[i].innerHTML = nextDays[i + 1].day.maxtemp_c;
    nextLowInput[i].innerHTML = nextDays[i + 1].day.mintemp_c;
    nextDaysIconInput[i].setAttribute(
      "src",
      nextDays[i + 1].day.condition.icon
    );
    nextCustom[i].innerHTML = nextDays[i + 1].day.condition.text;
    nextDayInput[i].innerHTML = nextDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }
}
searchInput.addEventListener('input' , function(){
startApp(searchInput.value);
})

async function startApp(cityName="cairo") {
  let weatherData = await getWeather(cityName);
  displayWeather(weatherData);
  displayNextDay(weatherData);
}

startApp();
