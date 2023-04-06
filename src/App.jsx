import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import SwitchRoutes from "./Utils/switchRoutes";
import initialData from './Utils/initialData'
import { reducers } from "./Utils/reducers";
import userReducer from "./Utils/userReducer";
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import app from "./Utils/Firebase";
import { collection, addDoc,getFirestore,getDoc ,doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const BookContext = createContext()
export const UserInfoContext = createContext()

function App() {
  
  const [books,bookDispatch]= useReducer(reducers,initialData)
  const [userInfo,setUserInfo] = useState({})
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate  =useNavigate()
  const [isLibrarian,setIsLibrarian] = useState(false)
  const auth = getAuth();
  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  setIsLoggedIn(true)
  }  else {
    setIsLoggedIn(false)
    console.log("logged out")
  }
})
  },[])


  const userContextValue = {
    setUserInfo,
    userInfo,
    isLoggedIn,
    setIsLoggedIn,setIsLibrarian,isLibrarian}

  return (
    <BookContext.Provider value={{books:books,dispatch:bookDispatch}}>
    <UserInfoContext.Provider value={userContextValue} >

    <div className="App">
      <SwitchRoutes />
    </div>
    </UserInfoContext.Provider>
    </BookContext.Provider>
  );
}

export default App;
