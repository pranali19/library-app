import BooksCard from "./booksCard"
import { BooksContainer} from '../styledComp/dashboard.style'
import { useContext } from "react";
import { BookContext } from "../App";

const BookList =({from})=>{
    const {books} = useContext(BookContext)
    let booksArr = from=='home'?books.filter(i=>i.available != true):books


    return(
        <BooksContainer>
        {booksArr.map(bookElem=>
        <BooksCard
            from={from} 
            title={bookElem.title} 
            authors={bookElem.authors} 
            genre={bookElem.genre} 
            excerpts={bookElem.excerpts} 
            available={bookElem.available} 
            description={bookElem.description}
            keys={bookElem.key}
            />
            )}
        </BooksContainer>
    )
}
export default BookList