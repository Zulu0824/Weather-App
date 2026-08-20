const search = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-button");
const mainContent = document.getElementById("main-content");

const API_KEY = "D4WY56P3JJQFPDXQRU446UJPW";

async function getWeather() {
  let location = search.value.trim();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

searchBtn.addEventListener("click", getWeather);
