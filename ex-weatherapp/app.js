function getWeather(){
// create a request object

let req = new XMLHttpRequest();

// set the request type and URL

let txtLocation = document.getElementById("txtLoc").value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${txtLocation}&units=metric&appid=93f26e3c57081a6210de53b8dcfdfea4`;

req.open('GET', url, true);

// onload of request
req.onload = function(){
    if(req.status >= 200 && req.status < 400){
       // weatherinfo.style.display = "flex";
        //get the information
        let data = JSON.parse(req.responseText);
        console.log(data);
        console.log(data.main.temp);
        
        document.getElementById("city").textContent = `${data.name}, ${data.sys.country}`;
        let dtime = new Date(data.dt*1000);
        document.getElementById("dtime").textContent = dtime;
        document.getElementById("wdesc").textContent = ` ${data.weather[0].main} : ${data.weather[0].description}`;
        
        document.getElementById("temp").textContent = data.main.temp + "°C";
        document.getElementById("wimg").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById("feels").textContent = ` Feels like ${data.main.feels_like}. ${data.weather[0].description}`
        document.getElementById("windspeed").textContent = "Wind Speed : "+data.wind.speed;
        document.getElementById("pressure").textContent = "Pressure : "+data.main.pressure;
        document.getElementById("humidity").textContent = "Humidity : "+data.main.humidity;
        document.getElementById("visibility").textContent = "Visibility : "+data.visibility;

    }
}
// send the request

req.send();

// message on error
req.onerror = function(){
    console.log("Error");
}
}