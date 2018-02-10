
let city = 'Beijing'
let url = 'https://api.openweathermap.org/data/2.5/weather?appid=4a172ab437d9871cb95cd47d26676729&q='

let weather

let t1 = function() {
  console.log("begin the query")
  let app = document.querySelector('#root')
  fetch(url+city)
    .then( resp => resp.json())
    .then( json => {
      console.log(json)
      
      app.innerHTML = getWeather(json)
    }).catch(err=> {
      console.log(err)
    })
}

function getWeather(data) {
  return(
    <h2>Hello</h2>
  )
}
