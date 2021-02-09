import styled from 'styled-components'

const Content = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
font-family: 'Hammersmith One', sans-serif;
width:60%;
height:40vh;
background-color: rgba(255, 255, 255, .15);
backdrop-filter: blur(5px);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
box-shadow: 3px 3px 3px 3px rgb(0,0,0,0.5);
border-radius:30px;
border:3px 3px 3px 3px;
@media screen and (max-width:450px){
width:60%;
height:40vh;
}
`

export default Content;