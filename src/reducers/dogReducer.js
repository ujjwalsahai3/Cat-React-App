import { Dogs } from '../constants/action-types'

const initialState={
    breeds:[],
    isLoading: true
}

//    return Object.assign({}, state, {
//        breeds: state.breeds.concat(action.payload)
//    })

const dogReducer = (state= initialState, action) =>{
    console.log(action.payload)
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