export default async () => {
    
  try {
    const num_weather_blocks = 3;
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=41.0471&lon=-73.7004&appid=c593b4d013e4a33298c51db30dd9096c"
    );
    const data = await response.json();
    const forecasts = data.list;

    const hourly_temps = [];
    const hourly_imgIDs = [];
    const timestamps = [];
    for (let i = 0; i < num_weather_blocks; i++) {
      const temp_kelvin = forecasts[i].main.temp;
      hourly_temps[i] = Math.round(((temp_kelvin - 273.15) * 9) / 5 + 32);
      hourly_imgIDs[i] = forecasts[i].weather[0].icon;
      timestamps[i] = forecasts[i].dt_txt;
    }
    for (var i = 0; i < num_weather_blocks; i++) {
      const weatherTextElement = document.getElementById(
        "weather-text" + i.toString()
      );
      weatherTextElement.textContent = `${hourly_temps[i]}°F`;
      const weatherImgElement = document.getElementById(
        "weather-img" + i.toString()
      );
      weatherImgElement.src = `https://openweathermap.org/img/wn/${hourly_imgIDs[i]}@2x.png`;
    }
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
};