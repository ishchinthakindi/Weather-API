let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location = document.getElementById("location").value
    let fetchWeather = async()=>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c356f6775dba328cfdc8f51b25343413`)
        let finalData = await data.json()
        let weatherDescription =(finalData.weather[0].main).toUpperCase()
        let tempValue = (Math.round(finalData.main.temp-273))
        let humidValue = (finalData.main.humidity)

        let desc = document.getElementById("weather_condition")
        desc.innerHTML=weatherDescription.toUpperCase()

        let temp = document.querySelector("#temp p")
        temp.innerHTML=`${tempValue}<sup>0</sup>`

        let humid = document.querySelector("#humid p")
        humid.innerHTML=humidValue

        let img = document.querySelector("img")
        let bgc = document.getElementById("main_container")
        console.log(bgc)
        
        switch(weatherDescription){
            case "CLEAR":
                img.src="./Assets/sunny-day.png";
                bgc.style.backgroundImage = "url(./Assets/clearWeather.gif)";
                break;
            case "CLOUDS":
                img.src="./Assets/clouds.png";
                bgc.style.backgroundImage = "url(./Assets/cloudsWeather.gif)";
                break;
            case "MIST":
                img.src="./Assets/mist.png";
                bgc.style.backgroundImage = "url(./Assets/mistWeather.gif)";
                break;
            case "HAZE":
                img.src="./Assets/haze.png";
                bgc.style.backgroundImage = "url(./Assets/hazeWeather.gif)";
                break;
            case "RAIN":
                img.src="./Assets/raining.png";
                bgc.style.backgroundImage = "url(./Assets/rainWeather.gif)";
                break;
            case "SNOW":
                img.src="./Assets/sunny-day.png";
                bgc.style.backgroundImage = "url(./Assets/snowWeather.gif)";
                break;
            case "DUST":
                img.src="./Assets/sandStorm.png";
                bgc.style.backgroundImage = "url(./Assets/dustWeather.gif)"
                break;
            default :
                img.src="./Assets/sunny-day.png";
                bgc.style.backgroundImage="url(./Assets/clearWeather.gif)";
            
        }

    }
    fetchWeather()
})