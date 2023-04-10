
import userSignUpAction from '../Utils/actionCreators'
import SignInTemp from './signInTemp'
import { UserInfoContext } from '../App'
import { useCallback, useContext } from 'react'
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
        }
        if(isOkay){
                const res =setUserData({...elements,navigate:navigate})  
             
                    res.then(ress=>{
                        if(ress){
                             navigate('/log-in')
                        }})
                 
        }
    }
    return(
        <SignInTemp title='Sign Up' inpArr={['name','username','email','password','role']} handler={handleSignUp}/>
    )
}
export default SignUpPage