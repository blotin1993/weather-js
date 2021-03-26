class Weather {
    constructor(city, state) {
        this.apiKey = ''
        this.city = city
        this.state = state
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch('apilink')

        const responseData = await response.json()

        return ressponseData.current_observation
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city
        this.state = state
    }
}