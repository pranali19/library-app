import { useContext, useRef, useState } from "react";
import { SearchBtnWrap, SearchDiv, SearchInp } from "../styledComp/search.styled"
import { BookContext } from "../App";
import { AuthorName } from "../styledComp/dashboard.style";
import { BookInfoStrip } from "../styledComp/home.styled";
import { useNavigate } from "react-router-dom";
// import SearchInpButton from 
const Search =()=>{
    const searchRef=useRef();
    const navigate = useNavigate()
    const {books}=useContext(BookContext)
    const [searchList,setSearchList] = useState([])
    const getBooks=()=>{
        const value = searchRef.current.value
      
        setSearchList(books.filter(i=>
            i.title.toLowerCase()
            .includes(value.toLowerCase()) ||
            i.authors.toLowerCase()
            .includes(value.toLowerCase())
            ))
    }
    const onClickStripe=(i)=>{
        const from ='dashboard'
        const {title,description,authors,genre,excerpts,available} = i
        const keys = i.key
            navigate('/dashboard/add-book',{state:{keys,from,title,description,authors,genre,excerpts,available}}) 
        
    }
    return (
       <SearchDiv>
        <SearchBtnWrap>
        <SearchInp type='text' ref={searchRef} onChange={getBooks}/>
        <button>search</button>
        {
            searchList.map(i=>
            <BookInfoStrip onClick={()=>onClickStripe(i)}>
              <h3>{i.title}</h3>
             <AuthorName> authors:  {i.authors}</AuthorName>
            </BookInfoStrip>
            
        )}
    </SearchBtnWrap>
       </SearchDiv>
    )
}
export default Search