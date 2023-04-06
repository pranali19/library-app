export const ADD_BOOK = "addBook"
export const DEL_BOOK = 'delBook'
export const UPDATE_BOOK = 'updateBook'

export const reducers = (state,action)=>{

    switch(action.type){
        case ADD_BOOK:
            return [...state,action.payload]
        case DEL_BOOK:
            return state.filter(value=>value.key!==action.payload.key)
        case UPDATE_BOOK:
            const val = state.filter(elem=>elem.key !== action.payload.key)
            action.payload.value['key'] = action.payload.key
            return [...val,action.payload.value]
        default:
            return state
    }
}