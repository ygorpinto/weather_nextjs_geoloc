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
  const days = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const months = ["Janeiro","Fevereiro","Março","Abril","Julho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  const getDate = (data) => {
    const date = data.getDate();
    const month = months[data.getMonth()];
    const day = days[data.getDay()];
    const year = data.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`
  }

console.log(getDate);

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


