class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feelsLike')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full
        this.desc.textContent = weather.weather
        this.string.textContent = weather.temperature_string
        this.icon.setAttribute('src', weather.icon_url)
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`
        this.humidity.textContent = `Feels Like: ${weather.feelsLike_string}`
        this.humidity.textContent = `DewPoint: ${weather.dewpoint_string}`
        this.humidity.textContent = `Wind: ${weather.wind_string}`
    }
}