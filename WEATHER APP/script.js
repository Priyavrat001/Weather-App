const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a756f2a88bmsh472def1d52428ccp123de8jsn7545a4e22274',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		sunset.innerHTML = response.sunset
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		wind_degree = response.wind_degree

	})


	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather('Ayodhya')