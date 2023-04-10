import { useNavigate } from 'react-router-dom'
import BookList from '../Utils/BookList'
import { IconWrap } from '../styledComp/addBook.styled'
import { MainHeaderStyle } from '../styledComp/dashboard.style'
import { BookInfoStrip, CustomHomeBtn, HomeContainer, HomeFeed, HomeHeader, LoginShowWrap } from '../styledComp/home.styled'
import {BiUserCircle} from 'react-icons/bi'
import { signOut,getAuth } from 'firebase/auth'
import { SubHeading } from '../styledComp/bookView.style'
import { useContext } from 'react'
import { UserInfoContext } from '../App'
// import { CardContainer,BookTitle,AuthorName,GenreName,Excrept, CardTitleWrap } from "../styledComp/dashboard.style"


const onClickSignOut=async ()=>{
  const auth = getAuth();
  signOut(auth)
    .then(()=>console.log("logged out"))
    .catch((err)=>console.log(err))
}
export const HomeHeaderComp = ()=>{
    const navigate = useNavigate()
    const {isLoggedIn,isLibrarian,userInfo} = useContext(UserInfoContext)
  
    return(
        <HomeHeader>
        <MainHeaderStyle m={"0% auto"}>Library App</MainHeaderStyle>
        <LoginShowWrap>
            <IconWrap m='auto 0%' h='50px' w='50px'>
                <BiUserCircle size='90%'/>
            </IconWrap>
            {isLoggedIn?
            <>
                <CustomHomeBtn onClick={onClickSignOut}>{'Log Out'}</CustomHomeBtn>
                <SubHeading>{userInfo.username}</SubHeading>
            </>:
            <CustomHomeBtn onClick={()=>navigate('/log-in')}>{'Login'}</CustomHomeBtn>
            }
            {
                isLibrarian ?
                <CustomHomeBtn onClick={()=>navigate('/dashboard')}>
                {'Dashboad'}
                </CustomHomeBtn>:''}

        </LoginShowWrap>
        </HomeHeader>
    )
}
const Home =()=>{
    return(
        <HomeContainer>
            <HomeHeaderComp/>
            <BookList from='home'/>
        </HomeContainer>
    )
}
export default Home