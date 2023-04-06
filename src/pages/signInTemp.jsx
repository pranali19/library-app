import { BackGroundStyle ,ContainerStyle} from "../styledComp/signUp.styled"
import ImageComp from '../Utils/imgComp'
import FormComp from '../Utils/formComp'
import WaveComp from "../Utils/waveComp"
const SignInTemp =({title,inpArr,handler})=>{
    return(
        <BackGroundStyle>
            <WaveComp />
        <ContainerStyle>
            <ImageComp/>
            <FormComp title={title} inpArr={inpArr} handler={handler}/>
        </ContainerStyle>
        </BackGroundStyle>
    )
}
export default SignInTemp