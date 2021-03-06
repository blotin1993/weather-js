// Init weather object
const weather = new weather('Boston', 'MA')
// Init ui
const ui = new UI()
// Init storage
const storage = new Storage()
// Get stored location data
const weatherLocation = storage.getLocationData()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    
    weather.changeLocation(city, state)

    // Set location in LS
    storage.setLocationData(city, state)

    // Get weather
    getWeather()

    //Close modal
    $('#locModal').modal('hide')
})

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint()
    })
    .catch(err => )
}