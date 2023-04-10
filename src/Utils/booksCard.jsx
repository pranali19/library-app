import { useNavigate} from "react-router-dom"
import { CardContainer,BookTitle,AuthorName,GenreName,Excrept, CardTitleWrap } from "../styledComp/dashboard.style"
import { IconWrap } from "../styledComp/addBook.styled"
import {AiFillEdit} from 'react-icons/ai'
const BooksCard = ({from,keys,title,authors,genre,excerpts,description,available})=>{
    const navigate = useNavigate()
    const onClickIcon=()=>{
        if(from == 'dashboard'){
            navigate('/dashboard/add-book',{state:{keys,from,title,description,authors,genre,excerpts,available}}) 
        }   
    }
    const onClickCard =()=>{
        if(from == 'dashboard'){
        }
        else{
        navigate('/book-view/123',{state:{keys,from,title,authors,description,genre,excerpts,available}})   }
    }
    return(
       <CardContainer bg={available} onClick={onClickCard}>
            <CardTitleWrap>
                <BookTitle>{title}</BookTitle>
                {from && from ==="dashboard"?<IconWrap onClick={onClickIcon}><AiFillEdit size='25'/></IconWrap>:''}
                
            </CardTitleWrap>
            <AuthorName>{authors}</AuthorName>
            <GenreName>{genre.join(', ')}</GenreName>
            <Excrept>{excerpts}</Excrept>
       </CardContainer>
    )
}

export default BooksCard