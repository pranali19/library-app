export const SIGN_UP = "sign-up"
const userReducer=(state,action)=>{
    switch(action.type){
        case SIGN_UP:
            return [...state,action.payload.user]
    }
}
export default userReducer