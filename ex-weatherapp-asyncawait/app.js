let measures = {
    metric:{temp:"°C",speed:"m/s",dist:"km"},
    imperial:{temp:"°F",speed:"mph",dist:"km"}
};

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }
  
  function showPosition(position) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=93f26e3c57081a6210de53b8dcfdfea4`;

    getWeather(url);
  }

  function getURL(){
    let txtLocation = document.getElementById("txtLoc").value;
    let units;

        if(document.getElementById("metric").checked){
            units = "metric";
        }else{
            units = "imperial";
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${txtLocation}&units=${units}&appid=93f26e3c57081a6210de53b8dcfdfea4`;
        return url;
  }

async function getWeather(url){
// create a request object
// set the request type and URL

let txtLocation = document.getElementById("txtLoc").value;
let units;

if(document.getElementById("metric").checked){
    units = "metric";
}else{
    units = "imperial";
}
try{
    let response = await fetch(url);

    if(!response.ok){
        const message = `Error retrieving the weather: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
        
    showWeatherData(JSON.stringify(data), units);
} catch(error){

    console.log(error);
    document.getElementById("city").textContent = error;
}
/*
let req = new XMLHttpRequest();
req.open('GET', url, true);

// onload of request
req.onload = function(){
    if(req.status >= 200 && req.status < 400){
       // weatherinfo.style.display = "flex";
        //get the information
        showWeatherData(req.responseText, units);
    }
}
// send the request

req.send();

// message on error
req.onerror = function(){
    console.log("Error");
}*/
}

function showWeatherData(weatherData, units){
   let data = JSON.parse(weatherData);
        console.log(data);
        console.log(data.main.temp);
        
        document.getElementById("city").textContent = `${data.name}, ${data.sys.country}`;
        if(document.getElementById("txtLoc").value == "undefined" || document.getElementById("txtLoc").value==""){
            document.getElementById("txtLoc").value = `${data.name}, ${data.sys.country}`;
        }
        let dtime = new Date(data.dt*1000);
        document.getElementById("dtime").textContent = dtime;
        document.getElementById("wdesc").textContent = ` ${data.weather[0].main} : ${data.weather[0].description}`;
        let mtemp = measures[units].temp;
        document.getElementById("temp").textContent = data.main.temp + measures[units].temp;
        document.getElementById("wimg").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById("feels").textContent = ` Feels like ${data.main.feels_like}${mtemp}. ${data.weather[0].description}`
        document.getElementById("windspeed").textContent = "Wind Speed : "+data.wind.speed+measures[units].speed;
        document.getElementById("pressure").textContent = "Pressure : "+data.main.pressure+"hPa";
        document.getElementById("humidity").textContent = "Humidity : "+data.main.humidity+"%";
        document.getElementById("visibility").textContent = "Visibility : "+(Number(data.visibility)/1000)+measures[units].dist;

}