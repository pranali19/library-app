import { useLocation } from "react-router-dom"
import { BookContainer, Synopsys,BookInfoWrapper, Block, SubHeading, InfoHeading } from "../styledComp/bookView.style"
import { AuthorName, BookTitle, GenreName } from "../styledComp/dashboard.style"
import { HomeContainer } from "../styledComp/home.styled"
import { HomeHeaderComp } from "./homePage"


const CreateBlock = ({label,labelValue})=>{
    return (
        <Block>
        <SubHeading>{label}</SubHeading>
        <InfoHeading>{labelValue?labelValue:'NOT Found'}</InfoHeading>
        </Block>
    )
}
const BookViewPage=()=>{
    const bookData = useLocation().state 
    return(
        <HomeContainer>
            <HomeHeaderComp/>
            <BookContainer>
                <BookInfoWrapper>
                <CreateBlock label='Title' labelValue={bookData.title}/>
                <CreateBlock label='Author' labelValue={bookData.authors}/>
                <CreateBlock label='Available' labelValue={bookData.available}/>
                
                <CreateBlock label='Excerpt' labelValue={bookData.excerpts}/>
                <CreateBlock label='Synopsys' labelValue={bookData.description}/>
                <CreateBlock label='Genre' labelValue={bookData.genre.join(', ')}/>


           

                </BookInfoWrapper>

            </BookContainer>
        </HomeContainer>
    )
}
export default BookViewPage