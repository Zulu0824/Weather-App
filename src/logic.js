const search = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-button");
const mainContent = document.getElementById("main-content");

const API_KEY = "D4WY56P3JJQFPDXQRU446UJPW";

async function getWeather() {
  let location = search.value.trim();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/?unitGroup=metric&key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
    renderUI(data);
  } catch (error) {
    console.error(error);
  }
}

function renderUI(data) {
  document.getElementById("weather-location").textContent =
    data.resolvedAddress;

  document.getElementById("temp-high").textContent =
    `High: ${data.days[0].tempmax}°C`;
  document.getElementById("temp-low").textContent =
    `Low: ${data.days[0].tempmin}°C`;

  document.getElementById("weather-humidity").textContent =
    `${data.currentConditions.humidity.toFixed(0)}%`;

  document.getElementById("uv-Index").textContent = `${data.days[0].uvindex}`;

  document.getElementById("weather-description").textContent = data.description;

  document.getElementById("weather-windspeed").textContent =
    `${data.currentConditions.windspeed} km/h`;
}

searchBtn.addEventListener("click", () => {
  getWeather(search.value.trim());
});

search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getWeather(search.value.trim());
  }
});

search.value = "New York";
getWeather("New York");
