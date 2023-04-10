
import { useContext,  useEffect,  useState } from "react"
import { AddBookInp,AddBookTextBox,AddBookIconWrap,AddBookLabel,AddBookContainer, AddBookSelector, BtnSelect, CheckBox, IconWrap } from "../styledComp/addBook.styled"
import {Heading1, SignBtnStyle} from '../styledComp/signUp.styled'
import {MdDelete} from 'react-icons/md'
import { useLocation,useNavigate } from "react-router-dom"
import { BookContext } from "../App"
import { addBookAction,deleteBookAction,updateBookAction } from "../Utils/actionCreators"
import {SelectInp} from '../Utils/selectInp'
const AddBookInputComp = ({name,defaultValue,type,genre,setGenre,setAvailable})=>{
    const defaultCheck =defaultValue==true?'on':'off'
  
    return (
        <div style={{display:'flex',width:"100%",justifyContent:'space-between',margin:"3% 0%"}}>
         <AddBookLabel >{name}</AddBookLabel>

         {
            type==='input'?
                <AddBookInp required defaultValue={defaultValue} name={name} />:
            type==='textBox'?
                <AddBookTextBox required defaultValue={defaultValue}  name={name} />:
            type ==='checkbox'?
                <CheckBox type='checkbox' defaultChecked={defaultCheck} onChange={()=>setAvailable(state=>!state)}/>:
            <SelectInp genre={genre} setGenre={setGenre}/>
         }
         
         
        </div>
    )
}
const getkey=()=>{
    return "OL"+String(Math.random()*(100-1000)+100)
}
const getFormDataObject=(elements,genre,available)=>{
    return {
        title:elements['title'].value,
        description:elements["description"].value,
        excerpts:elements["excerpts"].value,
        authors:elements['authors'].value,
        genre:genre,
        available:available,
    }
}
const AddBookPage =()=>{
    const {dispatch}=useContext(BookContext)
    const defaultdata = useLocation().state
    const [genre, setGenre] =useState([])
    const navigate = useNavigate()
    const [available,setAvailable] = useState(false)
    const pageValue =   defaultdata && defaultdata.from =="dashboard" ?"Update Book":"Add Book"
    useEffect(()=>{
        if(defaultdata && defaultdata.from =='dashboard'){
                 setGenre(defaultdata.genre)
        }
    },[defaultdata])
    const handleBookSubmit=(e)=>{
        e.preventDefault();
        let elements = {...e.target.elements}
        const result =  getFormDataObject(elements,genre,available)
        if(defaultdata && defaultdata.from =='dashboard'){
            dispatch(updateBookAction(result,defaultdata.keys))
       
           
        }
        else {
            result['key']=getkey()
            dispatch(addBookAction(result))
        }
        navigate('/dashboard')

      
    }
    const handleDelete=(key)=>{
        dispatch(deleteBookAction(key))
        navigate('/dashboard')
    }
   
    return (
        <AddBookContainer>
        
        <AddBookIconWrap>
            <Heading1 m={'auto'}>
            { pageValue  }
            </Heading1>
            <IconWrap onClick={()=>handleDelete(defaultdata.keys)}>
            <MdDelete size={'100%'}/>

            </IconWrap>
        </AddBookIconWrap>
        
        <div style={{width:"80%", margin:"5% auto auto auto"}}>

      
            <form onSubmit={(e)=>handleBookSubmit(e)} >
            <AddBookInputComp defaultValue={defaultdata?defaultdata.title:''} name={"title"} type={'input'}/>
            <AddBookInputComp defaultValue={defaultdata?defaultdata.authors:''} name={"authors"} type='input'/>


            <AddBookInputComp defaultValue={defaultdata?defaultdata.excerpts:''} name={"excerpts"} type='textBox'/>
            <AddBookInputComp defaultValue={defaultdata?defaultdata.description:''} name={'description'} type='textBox' />
            <AddBookInputComp defaultValue={defaultdata?defaultdata.genre:''} name={'genre'} genre={genre} setGenre={setGenre} />
            <AddBookInputComp defaultValue={defaultdata?defaultdata.available:''} name={"available"} type='checkbox' setAvailable={setAvailable}/>

            <SignBtnStyle bg='#8ec2ae'>
            {pageValue}
            </SignBtnStyle>
            </form>
            </div>
        </AddBookContainer>
    )
}
export default AddBookPage