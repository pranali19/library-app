import { useNavigate} from "react-router-dom"
import { CardContainer,BookTitle,AuthorName,GenreName,Excrept, CardTitleWrap } from "../styledComp/dashboard.style"

const BooksCard = ({from,keys,title,authors,genre,excerpts,description,available})=>{
    const navigate = useNavigate()
    
    const onClickCard =()=>{
        if(from == 'dashboard'){
            navigate('/dashboard/add-book',{state:{keys,from,title,description,authors,genre,excerpts,available}}) 
        }
        else{
        navigate('/book-view/123',{state:{keys,from,title,authors,description,genre,excerpts,available}})   }
    }
    return(
       <CardContainer bg={available} onClick={onClickCard}>
            <CardTitleWrap><BookTitle>{title}</BookTitle></CardTitleWrap>
            <AuthorName>{authors}</AuthorName>
            <GenreName>{genre.join(', ')}</GenreName>
            <Excrept>{excerpts}</Excrept>
       </CardContainer>
    )
}

export default BooksCard