
import { collection, addDoc,getFirestore,getDoc ,doc } from "firebase/firestore";
import app  from '../Utils/Firebase'
import { setDoc } from "firebase/firestore";


export const setUserData = async ({name,email,role,username,navigate})=>{
    const db = getFirestore(app);
    
    const userRef = collection(db, "users")
    const newRole = role == 'on'?true:false
    try {
     
        await setDoc(doc(userRef,email), {
          name: name,
          role:newRole,
          username:username
        }).then(

          navigate('/log-in') 
        );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      const data = {
        name: name,
        email: email,
        role: true,
        username:username
      }
      console.log(data)
   
    }

export const readUserData = async(email,navigate,setUserInfo,setIsLibrarian)=>{
    const db = getFirestore(app);
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    console.log(docSnap)
    if (docSnap.exists()) {
      const  userData = docSnap.data()
      setUserInfo(userData)
      setIsLibrarian(userData.role === true?true:false)
      
      navigate('/')
    } else {
      console.log("No such document!");
    }
}

