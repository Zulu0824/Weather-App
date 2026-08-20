const search = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-button");
const mainContent = document.getElementById("main-content");

const API_KEY = "D4WY56P3JJQFPDXQRU446UJPW";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/?key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    alert(error);
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(search.value.trim());
});

search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getWeather(search.value.trim());
  }
});
