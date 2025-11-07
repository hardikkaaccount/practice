// Weather App Project

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');
const forecast = document.getElementById('forecast');

// Sample weather data (in a real app, this would come from an API)
const sampleWeatherData = {
  "New York": {
    current: {
      location: "New York, US",
      temperature: 22,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      icon: "⛅"
    },
    forecast: [
      { day: "Mon", high: 24, low: 18, condition: "Sunny", icon: "☀️" },
      { day: "Tue", high: 26, low: 19, condition: "Sunny", icon: "☀️" },
      { day: "Wed", high: 23, low: 17, condition: "Rainy", icon: "🌧️" },
      { day: "Thu", high: 21, low: 16, condition: "Cloudy", icon: "☁️" },
      { day: "Fri", high: 25, low: 18, condition: "Partly Cloudy", icon: "⛅" }
    ]
  },
  "London": {
    current: {
      location: "London, UK",
      temperature: 18,
      condition: "Rainy",
      humidity: 78,
      windSpeed: 8,
      icon: "🌧️"
    },
    forecast: [
      { day: "Mon", high: 19, low: 14, condition: "Rainy", icon: "🌧️" },
      { day: "Tue", high: 20, low: 15, condition: "Cloudy", icon: "☁️" },
      { day: "Wed", high: 22, low: 16, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", high: 21, low: 15, condition: "Rainy", icon: "🌧️" },
      { day: "Fri", high: 23, low: 17, condition: "Sunny", icon: "☀️" }
    ]
  },
  "Tokyo": {
    current: {
      location: "Tokyo, Japan",
      temperature: 28,
      condition: "Sunny",
      humidity: 55,
      windSpeed: 6,
      icon: "☀️"
    },
    forecast: [
      { day: "Mon", high: 30, low: 24, condition: "Sunny", icon: "☀️" },
      { day: "Tue", high: 31, low: 25, condition: "Sunny", icon: "☀️" },
      { day: "Wed", high: 29, low: 23, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", high: 27, low: 22, condition: "Rainy", icon: "🌧️" },
      { day: "Fri", high: 28, low: 23, condition: "Cloudy", icon: "☁️" }
    ]
  }
};

// Display current weather
function displayCurrentWeather(data) {
  return `
    <div class="current-weather">
      <h2>${data.location}</h2>
      <div class="weather-main">
        <span class="temperature">${data.temperature}°C</span>
        <span class="icon">${data.icon}</span>
      </div>
      <p class="condition">${data.condition}</p>
      <div class="details">
        <div class="detail-item">
          <span>Humidity</span>
          <span>${data.humidity}%</span>
        </div>
        <div class="detail-item">
          <span>Wind</span>
          <span>${data.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  `;
}

// Display forecast
function displayForecast(data) {
  let forecastHTML = '<h3>5-Day Forecast</h3><div class="forecast-list">';
  
  data.forEach(day => {
    forecastHTML += `
      <div class="forecast-item">
        <span class="day">${day.day}</span>
        <span class="forecast-icon">${day.icon}</span>
        <span class="temps">
          <span class="high">${day.high}°</span>
          <span class="low">${day.low}°</span>
        </span>
      </div>
    `;
  });
  
  forecastHTML += '</div>';
  return forecastHTML;
}

// Search for weather
function searchWeather() {
  const location = searchInput.value.trim();
  
  if (!location) {
    alert("Please enter a city name");
    return;
  }
  
  // Simulate API loading
  weatherInfo.innerHTML = '<div class="loading">Loading weather data...</div>';
  forecast.innerHTML = '';
  
  // Simulate network delay
  setTimeout(() => {
    const cityKey = Object.keys(sampleWeatherData).find(
      city => city.toLowerCase() === location.toLowerCase()
    );
    
    if (cityKey) {
      const data = sampleWeatherData[cityKey];
      weatherInfo.innerHTML = displayCurrentWeather(data.current);
      forecast.innerHTML = displayForecast(data.forecast);
    } else {
      weatherInfo.innerHTML = `<div class="error">Weather data not found for "${location}"</div>`;
    }
  }, 800);
}

// Event listeners
searchBtn.addEventListener('click', searchWeather);

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchWeather();
  }
});

// Show default weather (New York) on load
window.addEventListener('load', () => {
  const defaultData = sampleWeatherData["New York"];
  weatherInfo.innerHTML = displayCurrentWeather(defaultData.current);
  forecast.innerHTML = displayForecast(defaultData.forecast);
});