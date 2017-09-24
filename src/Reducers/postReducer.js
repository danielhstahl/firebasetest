//@flow
import {SET_POST} from '../Actions/actionDefinitions'
import type {PostType} from '../Types/types'

type Action={
    type:string,
    post:PostType,
    key:string
}
export default (state:Array<PostType>=[], action:Action)=>{
    switch(action.type){
        case SET_POST:
            console.log({postId:action.key, ...action.post})
            return [...state, {postId:action.key, ...action.post}]
        default:
            return state
    }
}