
import {FormContainer,IconDiv, FormWrapper,InputContainer, Label,Heading1, SignInput, SignBtnStyle} from '../styledComp/signUp.styled'
import {CheckBox} from '../styledComp/addBook.styled'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
const SingleInputElem = ({placeholder,setChecked,checked})=>{

    return(
        <Label>
        {
            placeholder==='role'?
                <div>
                    <small>librarian role</small>
                    <CheckBox name={placeholder} type='checkbox' defaultChecked='off' checked={checked} onChange={()=>setChecked(state=>!state)}/>
                </div>:
        <SignInput required type={placeholder==='password'?'password':'text'} name={placeholder} placeholder={placeholder}/>
        }
        <IconDiv/>
        </Label>        
    )
}
const FormComp = ({title,inpArr,handler})=>{
    const [checked,setChecked]=useState('off')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const elements = [...e.target.elements]
                            .map(i=>{
                                return {name:i.name,value:i.value}
                            })
  
    let returnVal={}
    elements.map(i=>{if(i.name){returnVal[i.name] = i.value}})
    if(title == 'Sign Up'){
        const ckVal = checked?'on':'off'
        returnVal['role'] =ckVal ;
    }
    handler(returnVal)
    

    }
    return(
        <FormContainer>
        <FormWrapper>
        <Heading1>{title}</Heading1>
        <InputContainer>
            <form onSubmit={(e)=>handleSubmit(e)}>
            {inpArr.map(i=>
            <SingleInputElem placeholder={i} checked={checked} setChecked={setChecked} />
            )}
         
            <SignBtnStyle type='submit'>{title}</SignBtnStyle>
            </form>
            </InputContainer>
            {
                title==='Log In'?
                <small style={{margin:"3% auto auto auto"}}>
                    not regrstered yet. <Link to='/sign-up'>Sign Up</Link>
                </small>
                :''
            }
        </FormWrapper>
        </FormContainer>
    )
}
export default FormComp