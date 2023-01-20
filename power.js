const idPos = () => {
    const status = document.querySelector('.status');

    const success = (position) => {
        console.log(position)
    }

    const error = () => {
        status.textContent = 'Error';
    }

    navigator.geolocation.getCurrentPosition(success, error);

}

document.querySelector('.geolocate').addEventListener('click', idPos);

let weather = {
    apiKey: "3e37c7f566280252cb311273fe092d15",


    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" 
            +lat 
            + lon 
            + "&units=metric&appid=" 
            + part 
            +this.apiKey
        ).then((response) => response.json()).then((data) => this.displayWeather(data));

    },

    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather;
        const {temp, humidity} = data.main;
        const {speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    },
    

};