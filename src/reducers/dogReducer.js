import { Dogs } from '../constants/action-types'

const initialState={
    breeds:[],
    isLoading: true
}

const dogReducer = (state= initialState, action) =>{
    switch(action.type){
        case Dogs.SETDOGSDATA: {
            return{
                ...state,
                isLoading: false,
                breeds: action.payload
            }
        }

        default :
            return state
    }
}

export default dogReducer