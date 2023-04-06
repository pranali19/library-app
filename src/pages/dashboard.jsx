import { Link, Route, Routes ,useNavigate} from "react-router-dom"
import {  DashBoardLink,SubRoutesContainer, DashContainer, HeaderMenuStyle, LinkContainer, MainHeaderStyle } from "../styledComp/dashboard.style"
import BookList from "../Utils/BookList"
import Search from "./search"
import AddBookPage from "./addBookPage"
import ErrorPage from './404Page'
import { useContext, useState } from "react"
import { UserInfoContext } from "../App"

const activeStyle =    { 
color:"black",
background:"aliceblue",
borderRadius:"20px 0 0 20px",
}
const notActiveStyle = {
    borderRadius:0,
    color:"white",
    background:'transparent'
}
const Dashboard=()=>{
    const [active , setActive] = useState(1)
    const navigate = useNavigate()
    const {isLibrarian} =useContext(UserInfoContext)
    const getStyle = (value)=>active===value?activeStyle:notActiveStyle
    return(
        isLibrarian?
        <DashContainer>
        <HeaderMenuStyle>
            <MainHeaderStyle onClick={()=>navigate('/')}>Library App</MainHeaderStyle>
            <LinkContainer>
                <DashBoardLink to='/dashboard' style={getStyle(1)}  onClick={()=>setActive(1)}>Book List</DashBoardLink>
                <DashBoardLink to='/dashboard/add-book' style={getStyle(3)} onClick={()=>setActive(3)}>Add Book</DashBoardLink>
            </LinkContainer>
        </HeaderMenuStyle>
<SubRoutesContainer>

<Routes>
    <Route path="/" element={<BookList from='dashboard'/>} />
    <Route path="/add-book" element={<AddBookPage/>} />
    <Route path='*' element={<ErrorPage />}/>
    

</Routes>
</SubRoutesContainer> 
        </DashContainer>:
        <>
            <h3>
            "not authorized user"
            </h3>
               <h2>
               <Link to='/'>Home</Link>

               </h2>

        </>
    )
}

export default Dashboard