//@flow
import {SET_FIREBASE} from '../Actions/actionDefinitions'

type Action={
    type:string,
    firebase:Function
}
export default (state:Function|null=null, action:Action)=>{
    switch(action.type){
        case SET_FIREBASE:
            return action.firebase
        case SET_FIREBASE_CONFIG:
            state.firebase.initializeApp(config)
        default:
            return state
    }
}