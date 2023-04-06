import styled from "styled-components";
import { SignBtnStyle } from '../styledComp/signUp.styled'


export const CustomHomeBtn= styled(SignBtnStyle)`
      margin: auto 2% auto 0%;
    width: fit-content;
`
export const LoginShowWrap=styled.div`
    width:40%;
    height:10vh;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-content:center;
    ${'' /* background:white; */}

`
export const HomeContainer=styled.div`
width:100%;
height:auto;
min-height:100vh;
${'' /* background:; */}
`
export const HomeHeader = styled.div`
width:100%;
height:fit-content;
display:flex;
flex-direction:row;
background:#8ec2ae;
`