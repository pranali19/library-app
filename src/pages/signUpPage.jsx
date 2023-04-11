
import userSignUpAction from '../Utils/actionCreators'
import SignInTemp from './signInTemp'
import { UserInfoContext } from '../App'
import { useCallback, useContext, useState } from 'react'
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {setUserData} from '../Utils/firestoreMethods'

import { useNavigate } from 'react-router-dom'


const SignUpPage = ()=>{
   
    // const {userDispatch}=useContext(UserInfoContext)
    const navigate = useNavigate()
   let isOkay=true
    const handleSignUp= async(elements)=>{
       
        const auth = getAuth()
        try{
            await createUserWithEmailAndPassword(auth,elements.email,elements.password)
        }
        catch(err){
            isOkay = false
            alert(`request unsuccessfull ! ${err.message}`)
            window.location.reload(true)
        }
        if(isOkay){
                setUserData({...elements,navigate:navigate})  
                .then(res=>{
                    navigate('/log-in')
                    console.log(res)}
                )
              
        }
    }
    return(
        <SignInTemp title='Sign Up' inpArr={['name','username','email','password','role']} handler={handleSignUp}/>
    )
}
export default SignUpPage