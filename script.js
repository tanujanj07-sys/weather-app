const apiKey = "55aa0beadd891f35681e671194aa119f";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please select a city");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=55aa0beadd891f35681e671194aa119f

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error(data.message);
            }

            document.getElementById("location").innerText =
                `${data.name}, ${data.sys.country}`;

            document.getElementById("temperature").innerText =
                `🌡 Temperature: ${data.main.temp} °C`;

            document.getElementById("feels").innerText =
                `🤒 Feels Like: ${data.main.feels_like} °C`;

            document.getElementById("condition").innerText =
                `☁ Condition: ${data.weather[0].description}`;
        })
        .catch(error => {
            alert("❌ Error: " + error.message);
            console.error(error);
        });
}
