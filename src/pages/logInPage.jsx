

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
    const handleLogIn =useCallback(async (elements)=>{
             if (!isLoggedIn){
             try{
                const auth = getAuth()
                await signInWithEmailAndPassword(auth,elements.email,elements.password)
                .then(
                    readUserData(elements.email,navigate,setUserInfo,setIsLibrarian)
                )
               
            }
            catch(err){
                console.log(err)
                alert('authentication unsuccessfull')
            }}
            else{
                navigate('/')
            }
       
    })
    return(
        <SignInTemp title='Log In' inpArr={['email','password']} handler={handleLogIn}/>
    )
}
export default LogInPage