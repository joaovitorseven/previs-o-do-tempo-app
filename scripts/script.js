const key = 'a0ee3830497ea6a458a16a8defbc7f95'

const btnSearch = document.querySelector('.btn')
btnSearch.addEventListener('click', search)

function search() {
  const inputTxt = document.querySelector('.input-search').value
  searchCity(inputTxt)
}

async function searchCity(inputTxt) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputTxt}&appid=${key}&lang=pt_br&units=metric`
  ).then(resposta => resposta.json())

  dataScreen(dados)
}

function dataScreen(dados) {
  console.log(dados)
  document.querySelector('.weather-city').innerHTML = `Tempo em ${dados.name}`
  document.querySelector('.temp').innerHTML = `${Math.floor(dados.main.temp)}°C`
  document.querySelector('.temp-min').innerHTML = `Min ${Math.floor(
    dados.main.temp_min
  )}°C`
  document.querySelector('.temp-max').innerHTML = `Max ${Math.floor(
    dados.main.temp_max
  )}°C`

  document.querySelector(
    '.icon-weather'
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

  document.querySelector(
    '.weather-txt'
  ).innerHTML = `${dados.weather[0].description} | Humidade: ${dados.main.humidity}%`
}
