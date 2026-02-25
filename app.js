const apiKey = "YOUR_API_KEY";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
    .then(function(response) {
        const data = response.data;
        displayWeather(data);
    })
    .catch(function(error) {
        console.log("Error fetching weather:", error);
    });

function displayWeather(data) {
    const weatherDiv = document.getElementById("weather");

    const cityName = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherDiv.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temp} °C</p>
        <p>${description}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
    `;
}