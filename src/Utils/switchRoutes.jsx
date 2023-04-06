import {Routes, Route} from 'react-router-dom'
import SignUpPage from '../pages/signUpPage'
import LogInPage from '../pages/logInPage'
import ErrorPage from '../pages/404Page'
import Dashboard from '../pages/dashboard'
import Home from '../pages/homePage'
import BookViewPage from '../pages/bookViewPage'
const  SwitchRoutes =()=>{
    return(
        <div styled={{display:'none'}}>

        <Routes>
            <Route path='/sign-up' element={<SignUpPage/>}/>
            <Route path='/log-in' element={<LogInPage/>}/>
            <Route path='/dashboard/*' element={<Dashboard />}/>
            <Route path="/book-view/*" element={<BookViewPage/>}/>
            <Route path='/' element={<Home/>}/>
            
            <Route path='*' element={<ErrorPage/>}/>


        </Routes>
        </div>
    )
}
export default SwitchRoutes