import { Dogs } from '../constants/action-types'

export const dogsAllBreeds = breedsObj =>{
    return {
        type : Dogs.DOGSALLBREEDS,
        payload: breedsObj
    }
}

