import styled from "styled-components";
import {Link} from 'react-router-dom'

export const DashContainer=styled.div`
height:auto;
max-width: 100%;
width:100vw;
min-height:100vh;
background:aliceblue;
display:flex;
flex-direction:row;
`
export const HeaderMenuStyle = styled.div`
height:100vh;
width:20vw;
position:fixed;
background:#8ec2ac;
`
export const MainHeaderStyle=styled.h2`
font-size:2rem;
color:white;
padding:1%;
margin:${props=>props.m?props.m:"2% auto"};

text-align:center;
`
export const BooksContainer = styled.div`
display:flex;
height:max-content;
width:70%;
justify-content:spaced-evenly;
flex-flow:wrap;
gap:2%;
margin:2% auto auto auto;

`
  

  
 
export const DashBoardLink=styled(Link)`
color:white;
text-decoration:none;
font-size:1.3rem;
width:100%;
font-weight:500;
padding:8px 3px;
:focus{
    color:black;
    border-radius:30px;
    background:aliceblue;
    border-top-left-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 20px;
}
`
export const LinkContainer=styled.div`
width:100%;
margin-top:30%;
height:fit-content;
display:flex;
flex-direction:column;
gap:2%;
`
export const SubRoutesContainer=styled.div`
width:79vw;
    display: flex;
    align-self: self-end;
    margin: 3% 0% auto auto;
`
// BOOK CARD
export const CardTitleWrap=styled.div`
    height:fit-content;
    width:100%;
    padding:1px;
    display:inline-flex;
    margin-left:-1px;
    margin-top:-1px;
    ${'' /* background:green; */}
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 20%;
    line-height: 1.2rem;
    background: #8ec2ae
`

export const CardContainer =styled.div`
    font-size: 20px;
    box-sizing: inherit;
    font: 1em/1.618 Inter, sans-serif;
    display: flex;
    flex-direction: column;
    ${'' /* justify-content: space-between; */}
    height:250px;
    width:250px;
    margin:1% auto;
    ${'' /* padding: 10px; */}
    border: 1px solid rgba(255, 255, 255, .25);
    border-radius: 20px;
    background-color:${props=>props.bg?"rgb(227 255 232 / 45%)": "rgb(255 62 62 / 14%)"};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    @media(max-width:940px){
    height:250px;
    width:250px;
    margin:1%;
    padding: 10px;

}
  `
export const BookTitle = styled.h2`
      font-size: 1.3rem;

    font-family: math;
line-height:1.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;


    padding:3%;
    white-space: break-spaces;
    -webkit-line-clamp: 2; 


`
export const AuthorName = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    font-family: math;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: nowrap;
    display: -webkit-box;
    margin: 0% 3%;
`
export const GenreName = styled.h3`
  
    font-size: 1rem;
    font-family: math;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: nowrap;
    display: -webkit-box;
    margin: 0% 3%;


`
export const Excrept = styled.p`

display:-webkit-box;

    font-size: 1rem;
    font-family: math;
    white-space: break-spaces;
    -webkit-line-clamp: 3;
    align-self: end;
    margin-right: 5%;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

