import styled from 'styled-components'

export const BackGroundStyle = styled.div`
width:100%;
height:100vh;
background-color:#8ec2ae;
${'' /* background-color:#d38f95; pink grey*/}
`
export const SignBtnStyle =styled.button`

  align-items: center;
  appearance: none;
  background-color: ${props=>props.bg?props.bg:'#fff'};
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
  margin-top:8%;


:hover {
  background: #F6F9FE;
  color: #174ea6;
}

:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}
`


export const ContainerStyle = styled.div`
    display:flex;
    flex-direaction:row;
`
export const ImageContainer = styled.div`
    height:100vh;
    width:60%;
    ${'' /* background:green; */}
    display:flex;
    justify-content:center;
`
export const FormContainer = styled.div`
  height:75vh;
  z-index:1;
  margin-top:auto;
  margin-bottom:auto;
  width:40%;
  display:flex;
  justify-content:start;
  @media(max-width:1150px){
    width:45%;
  }
  @media(max-width:1050px){
    width:50%;
  }
`
export const ImageWave=styled.div`
    height: 90%;
    width: 290%;
    position: fixed;
    left: -25%;
    top: -19%;
` 
export const FormWrapper = styled.div`
  height:90%;
  width:70%;
  border-radius:20px;
  background:#7c747445;
  display:flex;
  flex-direction:column;

  box-shadow: grey 2px 2px 6px 2px;
`
export const IconDiv = styled.div`
  height:3%;
  width:3%;
  background:black;
  position:absolute;
  top:-3%;
`
export const InputContainer =styled.div`
display:flex;
height:auto;
flex-direction:column;
margin-top:10%;
width:100%;

  align-items:spaced-evenly;
  justify-content:center;
`
export const SignUpImage = styled.img`
  height:70%;
  width:60%;
  margin-top:auto;
  margin-bottom:auto;
`

export const SignInput=styled.input`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border: none;
  border-bottom:2px solid #58605c;
  ${'' /* border-radius: 4px; */}
  font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: #282828;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
  -webkit-appearance: none;
  ::placeholder{
    color:#58605c
  }
`

export const Label=styled.div`
width:90%
`
export const Heading1=styled.h1`
font-size:2rem;
width:85%;
font-family:san-serif;
margin:${props=>props.m?props.m:'initial'};
margin-top:2%;

`