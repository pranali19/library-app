

import { useCallback, useContext } from 'react'
import SignInTemp from './signInTemp'
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore/lite';


import { UserInfoContext } from '../App'
import { useNavigate } from 'react-router-dom'
import {readUserData} from '../Utils/firestoreMethods'

const LogInPage =()=>{
    const {setUserInfo,isLoggedIn,setIsLibrarian}=useContext(UserInfoContext)
    const navigate =useNavigate()
   let isOkay=true
    const handleLogIn =useCallback(async (elements)=>{
             if (!isLoggedIn){
             try{
                const auth = getAuth()
                await signInWithEmailAndPassword(auth,elements.email,elements.password)
               
            }
            catch(err){
                isOkay = false
                console.log(err)
                alert('authentication unsuccessfull')
            }}
            if(isOkay){
                    readUserData(elements.email,navigate,setUserInfo,setIsLibrarian)
            }

       
    })
    return(
        <SignInTemp title='Log In' inpArr={['email','password']} handler={handleLogIn}/>
    )
}
export default LogInPage