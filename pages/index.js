import styled from 'styled-components'
import Showcity from '../components/Showcity'
import Showtemp from '../components/Showtemp'
import Container from '../components/Container'
import { useState, useEffect } from 'react'
import Content from '../components/Content'
import { typeOf } from 'react-is';
import Input from '../components/Input'
import Shadow from '../components/Shadow'

export default function Home() {

  const [weather, setWeather] = useState("");

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=9bea4fffe3d51d2da210f4269fa3a525`)
          .then(response => response.json())
          .then(data => setWeather(data));
      });
    }
  })
  return (
    <>
      {(typeof weather.main != "undefined") ? (

        <Container>
          <Shadow>
            <Input placeholder="Digite a cidade aqui"></Input>
            <Content>
              <Showcity>{weather.name}</Showcity>
              <Showtemp>{Math.round(weather.main.temp)}º C</Showtemp>
            </Content>
          </Shadow>
        </Container>
      ) : ("")}
    </>
  )
}


