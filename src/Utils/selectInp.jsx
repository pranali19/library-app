import { AddBookInp, AddBookSelector, BtnSelect, IconWrap, Wrap } from "../styledComp/addBook.styled"
import {  useRef, useState } from "react"
import genreArray from "../Utils/genreArray"
import {GrClose} from 'react-icons/gr'
export const SelectInp =({genre,setGenre})=>{
    const genreRef = useRef()
    const [helperList,setHelperList]=useState([])
    const checkGenre=()=>{
        const genreValue=genreRef.current.value
        const value=genreArray.find(elem=>genreValue.toLowerCase()===elem.toLowerCase())
        const hasCopy= genre.includes(value)
       
        if(value && !hasCopy){
            setGenre(state=>[...state,value])
        }
        genreRef.current.value = ''
        
    }
    const fillValueInput=(value)=>{
        genreRef.current.value=value
        setHelperList([])
    }

    const onChangeGenreInp =(e)=>{
        e.preventDefault();
        const value = e.target.value
        if (value ===''){
            setHelperList([])
        }else{
        setHelperList(genreArray.filter(i=>
                    i.toLowerCase()
                    .includes(value.toLowerCase())))
                
    }}
    const deleteFromGenre = (val)=>{
        setGenre(genre.filter(gen=>gen !==val))
    }
    return(
        <div style={{width:"50%"}}>

        <AddBookSelector>
        {genre?
            genre.map(i=>
            <Wrap>
            <AddBookInp w='85%' value={i} disabled={true}/>
              <IconWrap>
                    <GrClose size={'90%'} onClick={()=>deleteFromGenre(i)}/>
              </IconWrap>
            </Wrap>):
            ''

        }

        <AddBookInp onChange={(e)=>onChangeGenreInp(e)} w='85%' ref={genreRef}/>
            <BtnSelect type='button' onClick={()=>checkGenre()}>add</BtnSelect>
        </AddBookSelector>

        {helperList.map(genre=><h4 onClick={()=>fillValueInput(genre)}>{genre}</h4>)}
        </div>
    )
}