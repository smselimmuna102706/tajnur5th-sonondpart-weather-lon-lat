
const api_key= `46ad7457603b9b0104e633e78cd60e16`;

document.getElementById("clickBtn").addEventListener("click",function(){
      const city = document.getElementById("city-name").value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

      fetch(apiUrl)
      .then(res => res.json())
      .then(data =>displayData(data));
})

function displayData(data){
      console.log(data)
      const city = document.getElementById("city-name").value;
      const location = document.getElementById("city");
      location.innerHTML = city;
      document.getElementById("city-name").value = "";


      const temperature = document.getElementById("temperature");
      temperature.innerHTML = data.main.temp;

      const condition = document.getElementById("condition");
      condition.innerHTML = data.weather[0].main;

      const Latitude = document.getElementById("Latitude");
      Latitude.innerHTML = data.coord.lat;


      const Longitude =document.getElementById("Longitude");
      Longitude.innerHTML = data.coord.lon;



}




