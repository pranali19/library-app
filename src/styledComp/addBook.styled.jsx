// ADD BOOK Style
import styled from "styled-components";


export const Wrap =styled.div`
width:100%;
height:auto;
display:inline-flex;
flex-direction:row;
justify-content:space-between;

`
export const AddBookContainer = styled.div`
min-height:80vh;
height:auto;
width:50%;
position:relative;
display:flex;
flex-direction:column;
top:3%;
${'' /* justify-content:center; */}
margin:auto auto;
margin-bottom:10%;
background:white;
padding-bottom:5%;
`
export const AddBookSelector = styled.div`
    height:auto;
    min-height:30px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    width: 100%;
    margin-left:-13%;
    padding: .30rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    color: #4f4f4f;
    background-color: #fff;
    background-clip: padding-box;
    border: 2px solid #bdbdbd;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: all .2s linear;
`
export const AddBookTextBox = styled.textarea`
 min-height: auto;
    display: block;
    width: 50%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #4f4f4f;
    background-color: #fff;
    background-clip: padding-box;
    border: 2px solid #bdbdbd;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: all .2s linear;
`
export const AddBookInp = styled.input`
    min-height: auto;
    display: block;
    width: ${props=>props.w?props.w:"50%"};
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #4f4f4f;
    background-color: #fff;
    background-clip: padding-box;
    border: 2px solid #bdbdbd;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: all .2s linear;
    :disabled{
        background:#b3bdb461;
    }

`
export const AddBookLabel = styled.label`
position: relative;
    top: 0;
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    left: .75rem;
    padding-top: .37rem;
    pointer-events: none;
    transform-origin: 0 0;
    transition: all .2s ease-out;
    color: rgba(0,0,0,.6);
    margin-bottom: 0;
`

export const BtnSelect =styled.button`

  align-items: center;
  appearance: none;
  background-color:'#fff';

  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  color: #3c4043;
  cursor: pointer;
 
 width:95%;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  max-width: 100%;
  padding: 5px 2px;
  height:90%;
  position: relative;
  text-align: center;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  z-index: 0;
  margin:4% auto auto auto;


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
export const CheckBox=styled.input`
padding:10px;
height:20px;
width:20px;
`
export const AddBookIconWrap = styled.div`
display:inline-flex;
margin:auto;
width:100%;
`
export const IconWrap=styled.div`
display:flex;
height:${props=>props.h?props.h:'35px'};
width:${props=>props.w?props.w:'35px'};
margin:${props=>props.m?props.m:"auto 5% auto auto"};
`