async function showWeather(){
	a=placeName.value;
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ a;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39903e08c9msh6a70afd28bc52fbp172d08jsnd39ac5f0f3cc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	if(response.status == 400){
		document.querySelector("#error").style.display="block";
		document.querySelector("#showW").style.display="none";

	}
	else{const result = await response.json();
		console.log(result);
		cityName.innerHTML=a;
		temp.innerHTML= "Temperature : " + result.temp + " °C";
		hum.innerHTML= "Humidity : " + result.humidity + " %" ;
		feels.innerHTML= "Feels Like : " + result.feels_like + " °C";}
} catch (error) {
	console.log("error");
}
}