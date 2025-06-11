const apiKey = 'b6907d289e10d714a6e88b30761fae22'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) return alert("Please enter a city name.");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;
            const temp = main.temp;
            const desc = weather[0].description;
            const result = `
        <h2>${name}</h2>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${desc}</p>
      `;
            document.getElementById('weatherResult').innerHTML = result;
        })
        .catch(err => {
            document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${err.message}</p>`;
        });
}