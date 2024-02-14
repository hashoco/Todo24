
//https://openweathermap.org/api


const API_KEY = "0838f1fd55a4ba61548ee4cc71555271"
  //const API_KEY = "2834387742b25d5393a21e88fee8246a";
function onGeoOk(position){
    
    const lat = position.coords.latitude ;
    const lon = position.coords.longitude ;
    console.log("You live in",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=> response.json()).then(data=>{
        
        const city =document.querySelector("#weather span:first-child")
        const weather =document.querySelector("#weather span:nth-child(2)");
        city.innerText    =  `${data.name} is`;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Cant't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

