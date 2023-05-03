tiranaWeatherData();

function useWeatherData(data){

    var weatherCity = data.location.name

    var weather = `<div class="day d-flex justify-between align-center" id="today">
                        <h3>Today</h3>
                        <img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" id="img-today">
                        <p id="description-today">${data.forecast.forecastday[0].day.condition.text}</p>
                        <div class="d-flex justify-between">
                            <p class="high"><span class="nr">${data.forecast.forecastday[0].day.maxtemp_c}</span>&#176;</p>
                            <p class="low"><span class="nr">${data.forecast.forecastday[0].day.mintemp_c}</span>&#176;</p>
                        </div>
                    </div>
                    </div>
                    <div class="day d-flex justify-between align-center" id="tomorrow">
                        <h3>Tomorrow</h3>
                        <img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}" id="img-tomorrow">
                        <p id="description-tomorrow">${data.forecast.forecastday[0].day.condition.text}</p>
                        <div class="d-flex justify-between">
                            <p class="high"><span class="nr">${data.forecast.forecastday[0].day.maxtemp_c}</span>&#176;</p>
                            <p class="low"><span class="nr">${data.forecast.forecastday[0].day.mintemp_c}</span>&#176;</p>
                        </div>
                    </div>
                    <div class="day d-flex justify-between align-center" id="friday">
                        <h3>Friday</h3>
                        <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.icon}" id="img-friday">
                        <p id="description-friday">${data.forecast.forecastday[1].day.condition.text}</p>
                        <div class="d-flex justify-between">
                            <p class="high"><span class="nr">${data.forecast.forecastday[1].day.maxtemp_c}</span>&#176;</p>
                            <p class="low"><span class="nr">${data.forecast.forecastday[1].day.mintemp_c}</span>&#176;</p>
                        </div>
                    </div>
                    <div class="day d-flex justify-between align-center" id="saturday">
                        <h3>Saturday</h3>
                        <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}" id="img-saturday">
                        <p id="description-saturday">${data.forecast.forecastday[2].day.condition.text}</p>
                        <div class="d-flex justify-between">
                            <p class="high"><span class="nr">${data.forecast.forecastday[2].day.maxtemp_c}</span>&#176;</p>
                            <p class="low"><span class="nr">${data.forecast.forecastday[2].day.mintemp_c}</span>&#176;</p>
                        </div>
                    </div>`
    document.querySelector('.city-weather').innerHTML = weather;
    document.querySelector('#city').innerHTML = weatherCity
}

async function tiranaWeatherData() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=3345607510e04ae2888224447230904&q=Tirana&days=4&aqi=no&alerts=no");
    var weatherData = await response.json();
    console.log(weatherData)
    useWeatherData(weatherData);
}

async function durresWeatherData() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=3345607510e04ae2888224447230904&q=Durres&days=4&aqi=no&alerts=no");
    var weatherData = await response.json();
    console.log(weatherData)
    useWeatherData(weatherData);
}

async function beratWeatherData() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=3345607510e04ae2888224447230904&q=Berat&days=4&aqi=no&alerts=no");
    var weatherData = await response.json();
    console.log(weatherData)
    useWeatherData(weatherData);
}

async function korceWeatherData() {
    var response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=3345607510e04ae2888224447230904&q=Korce&days=4&aqi=no&alerts=no");
    var weatherData = await response.json();
    console.log(weatherData)
    useWeatherData(weatherData);
}


function loadCity(idElement, idOfChange) {
    if(idElement == 0){
        document.getElementById(idOfChange).value = "c";
        tiranaWeatherData();        
    }
    else if(idElement == 1) {
        document.getElementById(idOfChange).value = "c";
        beratWeatherData();
    }
    else if (idElement == 2) {
        document.getElementById(idOfChange).value = "c";
        korceWeatherData();
    }
    else if (idElement == 3){
        document.getElementById(idOfChange).value = "c";
        durresWeatherData();
    }
}

function changeDegree(element) {
    var option = element.value;
    var elList = document.querySelectorAll('.nr');
    
    if (option == "f") {
        elList.forEach(el => el.innerHTML = Math.round(Number(el.innerHTML) *1.8+32));
    }
    else {
        elList.forEach(el => el.innerHTML = Math.round((Number(el.innerHTML) -32) * 5/9));
    }
}

function acceptCookies(idOfCookies) {
    document.getElementById(idOfCookies).remove();
}