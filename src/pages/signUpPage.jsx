
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
 
    const handleSignUp= async(elements)=>{
        console.log(elements)
        try{
            const auth = getAuth()
            await createUserWithEmailAndPassword(auth,elements.email,elements.password)
            .then(
                setUserData({...elements,navigate:navigate})
                )
           
        }
        catch(err){
            console.log(err)
            alert(`request unsuccessfull ! ${err.message}`)
        }
        console.log(elements)

    
    }
    return(
        <SignInTemp title='Sign Up' inpArr={['name','username','email','password','role']} handler={handleSignUp}/>
    )
}
export default SignUpPage