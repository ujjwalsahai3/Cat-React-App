import { Dogs } from '../constants/action-types'

export const setDogsData = breedsObj =>{
    return {
        type : Dogs.SETDOGSDATA,
        payload: breedsObj
    }
}


