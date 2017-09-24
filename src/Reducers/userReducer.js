//@flow
import {SET_USER, UNSET_USER} from '../Actions/actionDefinitions'
import {User} from '../Types/types'

type Action={
    type:string,
    user:User
}
export default (state:User|null=null, action:Action)=>{
    switch(action.type){
        case SET_USER:
            return action.user
        case UNSET_USER:
            return null
        default:
            return state
    }
}