async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "a6b5dbde4771cb2b6fcdaa6cd6c25ff7"; // your real key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;

      console.log("Weather condition:", data.weather[0].main);

      const weather = data.weather[0].main.toLowerCase();

      if (weather.includes("cloud")) {
  document.body.style.background = "url('cloud.jpg') no-repeat center center fixed";
} else if (weather.includes("rain")) {
  document.body.style.background = "url('rain.jpg') no-repeat center center fixed";
} else if (weather.includes("clear")) {
  document.body.style.background = "url('sunny.jpg') no-repeat center center fixed";
} else if (weather.includes("snow")) {
  document.body.style.background = "url('snow.jpg') no-repeat center center fixed";
} else {
  document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
}

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";


    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
    console.error(error);
  }
}
