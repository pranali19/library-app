import {ImageContainer, SignUpImage} from '../styledComp/signUp.styled'

import BookImage from '../images/book2.svg'

const ImageComp = ()=>{
    return(
        <ImageContainer>
        <SignUpImage src={BookImage} alt='book-reader'/>
        </ImageContainer>
    )
}
export default ImageComp