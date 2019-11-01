var weather;
function search(){

var city =  $("#city").val();
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=09b7d6a7e4a9ceb7d3cb6ed0df70fcf0',
    type: 'GET',
	dataType: "jsonp",
    success: function(data) {
     weather = data;
	 console.log(data);
	 showReport();
    },
	error: function (error){
		console.log(error)
	}
  });
  }
  
 function showReport(){
	
	document.getElementById("show-report").innerHTML=  "City: "+ getCity()+" <br>Temperature: "+getTemperature()+"F <br> Wind: "+getWind()+" mph <br>"+" Humidity: "+getHumidity()+"% <br>"+" Weather: "+getWeather()+" <img src='http://openweathermap.org/img/w/"+getWeatherIcon()+".png'><br>";

	//document.getElementById("show-report").innerHTML= document.getElementById("show-report").innerHtml + "Weather: "+getWeather()+" "+"<img src='http://openweathermap.org/img/w/'"+getWeatherIcon()+">"+"<br>";
 
 }
 
 function getCity(){
	return $("#city").val();
 }
  function getDate(){
  console.log(new Date());
  }
  function getHumidity(){
  console.log(weather["main"]["humidity"]);
  return weather["main"]["humidity"];
  }
   function getWind(){
  console.log(weather["wind"]["speed"]);
  return weather["wind"]["speed"];
  }
 
  
    function getTemperature(){
  console.log(weather["main"]["temp"]);
  return weather["main"]["temp"];
  }
  
  function getWeather(){
  console.log(weather["weather"][0]["main"]+" "+weather["weather"][0]["icon"]);
  return weather["weather"][0]["main"];
  }
  
  function getWeatherIcon(){
  console.log(weather["weather"][0]["icon"]);
  return weather["weather"][0]["icon"];
  }


  
 
//http://openweathermap.org/img/w/04n.png