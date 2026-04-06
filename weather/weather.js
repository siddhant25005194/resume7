const apiKey ="8e18a81ea64d7433c88538d4eb922a27";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?appid=8e18a81ea64d7433c88538d4eb922a27&units=metric&q= ";
const forecast = "https://api.openweathermap.org/data/2.5/forecast?appid=8e18a81ea64d7433c88538d4eb922a27&units=metric&q= ";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404 )
    {
        document.querySelector(".error").style.display = "block";
     document.querySelector(".weather").style.display = "none";
     document.querySelector(".forecast").style.display = "none";
    }
    else{
var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity  + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "cloudy.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    } else if(data.weather[0].main == "Drizzle")
        {
        weatherIcon.src = "rain2.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.webp";
    }
    document.querySelector(".weather").style.display  = "block";
     document.querySelector(".error").style.display  = "none";

     const forecastResponse = await fetch(forecast + city + `&appid=${apiKey}`);
     const forecastData = await forecastResponse.json();
    document.querySelector(".forecast").style.display = "flex";
     const forecastContainer = document.querySelector(".forecast");
     forecastContainer.innerHTML = "";
     for (let i = 0; i < forecastData.list.length; i += 8) {
        const dayData = forecastData.list[i];

        const date = new Date(dayData.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

        forecastContainer.innerHTML += `
            <div class="forecast-card">
                <h3>${dayName}</h3>
                <p>${Math.round(dayData.main.temp)}°C</p>
                <p>${dayData.weather[0].main}</p>
            </div>
        `;
    }
    
    console.log(forecastData);

}
    }
    
searchBtn.addEventListener ("click", ()=>{
document.querySelector(".card").style.marginTop ="15px";
checkWeather(searchBox.value);
})