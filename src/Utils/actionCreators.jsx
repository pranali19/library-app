import {ADD_BOOK,DEL_BOOK,UPDATE_BOOK} from './reducers'
import { SIGN_UP } from './userReducer'

export const addBookAction =(value)=>{
    return {type:ADD_BOOK,payload:value}
}
export const updateBookAction=(value,key)=>{
    return {type:UPDATE_BOOK,payload:{value:value,key:key}}
}
export const deleteBookAction=(key)=>{
    return {type:DEL_BOOK,payload:{key:key}}

}
export const userSignUpAction=(user)=>{
    return {type:SIGN_UP,payload:{user:user}}
}