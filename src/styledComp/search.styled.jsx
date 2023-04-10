import styled from 'styled-components'
import { SignInput } from './signUp.styled'


export const SearchDiv=styled.div`
    min-height:100vh;
    height:auto;
    display:flex;
    justify-content:center;
    width:100vw;
`
export const SearchInp=styled(SignInput)`
 border:2px solid black;
 border-radius:20px;
`
export const SearchBtnWrap=styled.div`
    width:70%;
`