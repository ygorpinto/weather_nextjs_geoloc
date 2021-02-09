import styled from 'styled-components'

const Input = styled.input`
::placeholder{
    text-align:center;
}
height:4vh;
width:30%;
border-radius: 12px;
box-shadow: 0px 4px rgb(0,0,0,0.5);
margin:0 0 8% 0;
border:none;
@media screen and (max-width:450px){
    margin:0 0 20% 0;
    width:60%;
}
`

export default Input;