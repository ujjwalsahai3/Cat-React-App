import { Dogs } from '../constants/action-types'

const initialState={
    breeds:[]
}
const dogReducer = (state= initialState, action) =>{
    switch(action.type){
        case Dogs.DOGSALLBREEDS: {
               return Object.assign({}, state, {
                   breeds: state.breeds.concat(action.payload)
               })
           }
        default :
            return state
    }
}

export default dogReducer