import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Content from '../components/Content'
import { typeOf } from 'react-is';

export default function Home() {
const [weather, setweather] = useState({})
console.log(weather);
  useEffect(function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position=>
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=9bea4fffe3d51d2da210f4269fa3a525`)
        .then(response=>response.json())
        .then(data=>setweather(data))
        )
      }
    })
  
  return (
    <>
    {(typeof weather.main != "undefined") ? (
    <Content 
    wname={weather.name}
    wtemp={weather.main.temp}
    >
    </Content>
    ) : ('')}
    </>
    
  )
}


