import styled from "styled-components";
import { SignBtnStyle } from '../styledComp/signUp.styled'



export const HomeFeed=styled.div`
    width:80%;
    height:auto;
    align-self:center;
    min-height:90vh;
    display:flex;
    margin:0 auto;
    justify-content:center;
    background-color:rgb(67 114 16 / 21%);
`
export const BookInfoStrip=styled.div`
width:90%;
height:10vh;
display:flex;
background:#3f756642;
flex-direction:column;
margin-top:3%;
border-radius:10px;


`
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