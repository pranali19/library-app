
import { collection, addDoc,getFirestore,getDoc ,doc } from "firebase/firestore";
import app  from '../Utils/Firebase'
import { setDoc } from "firebase/firestore";


export const setUserData = async ({name,email,role,username,navigate})=>{
    const db = getFirestore(app);
    
    const userRef = collection(db, "users")
    const newRole = role == 'on'?true:false
    let isOkay =true
    try {
       await setDoc(doc(userRef,email), {
          name: name,
          role:newRole,
          username:username
        })
      } catch (e) {
        isOkay=false
        alert("Error adding document: ", e);
      }
 return isOkay
   
    }

export const readUserData = async(email,navigate,setUserInfo,setIsLibrarian)=>{
    const db = getFirestore(app);
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const  userData = docSnap.data()
      await setUserInfo(userData)
      await setIsLibrarian(userData.role === true?true:false)
      navigate('/')

    } else {
      alert("No match found!");
    }
}

