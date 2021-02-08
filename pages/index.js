import styled from 'styled-components'
import {useState, useEffect} from 'react'

export default function Home() {

const [weather, setweather] = useState({})

  useEffect(function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position=>
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=9bea4fffe3d51d2da210f4269fa3a525`)
        .then(response=>response.json())
        .then(data=>setweather(data))
        )
      }
    })

  console.log(weather);

  return (
    <>
    <p>A Temperatuda de {weather.name} é {weather.main.temp}ºC</p>
    </>
  )
}
