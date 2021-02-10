import styled from 'styled-components'
import Showcity from '../components/Showcity'
import Showtemp from '../components/Showtemp'
import Container from '../components/Container'
import { useState, useEffect } from 'react'
import Content from '../components/Content'
import { typeOf } from 'react-is';
import Input from '../components/Input'
import Shadow from '../components/Shadow'
import Showdate from '../components/Showdate'

export default function Home() {

  const [weather, setWeather] = useState("");
  const [city, setcity] = useState("");
  const [getcity, setgetcity] = useState("");
  const [getweather, setgetweather] = useState("");

  const API_KEY = "c4317268efb7fa13eb2c50160d102f31"

  const days = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const months = ["Janeiro","Fevereiro","Março","Abril","Julho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  const getDate = (data) => {
    const date = data.getDate();
    const month = months[data.getMonth()];
    const day = days[data.getDay()];
    const year = data.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`
  }

  useEffect(()=>{
    fetchbyCoord()
  },[getweather])

  const fetchbyCoord = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = (position.coords.latitude)
        const lon = (position.coords.longitude)
        setgetweather(`weather?lat=${lat}&lon=${lon}`)
        fetch(`https://api.openweathermap.org/data/2.5/${getweather}&units=metric&appid=${API_KEY}`)
          .then(response => response.json())
          .then(data => setWeather(data));
      });
    }
  }

  const searchWeatherbyCity = (e) => {
  e.preventDefault()
  setgetweather(`weather?q=${city}`)
  setgetcity(`${weather}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?${getcity}&units=metric&appid=${API_KEY}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))
    }

  return (
    <>
      {(typeof weather.main != "undefined") ? (
        <Container>
          <Shadow>
            <form onSubmit={searchWeatherbyCity}>
            <Input 
            value={city}
            onChange={e=>setcity(e.target.value)}
            placeholder="Digite a cidade aqui">
            </Input>
            </form>
            <Content>
            <Showdate>{getDate(new Date())}</Showdate>
              <Showcity>{weather.name}</Showcity>
              <Showtemp>{Math.round(weather.main.temp)}º C</Showtemp>
            </Content>
          </Shadow>
        </Container>
      ) : ("")}
    </>
  )
}


