const key = "615f5a88b44227a6352a06d9e52c337e"

function dadosNaTela(dados) {
    document.querySelector('.text-weather-city').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temperature').innerHTML = Math.floor(dados.main.temp) +" °C "
    document.querySelector('.temp-description').innerHTML = dados.weather[0].description
    document.querySelector('.moisture').innerHTML = "Umidade: "+ dados.main.humidity + " %"
    document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    
    console.log(dados)
}

async function seekCity(city) {
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dadosNaTela(dados)
}

function clickButton() {
    const city = document.querySelector('.name-city').value 
    
    
    seekCity(city)

}