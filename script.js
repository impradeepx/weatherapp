function getWeather() {
    const city = document.getElementById('cityInput').value;
  
    // API key from OpenWeatherMap
    const apiKey = 'YOUR_API_KEY';
  
    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Display weather information
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
      });
  }
  