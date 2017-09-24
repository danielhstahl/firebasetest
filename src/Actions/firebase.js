import {
    SET_FIREBASE_CONFIG, 
    SET_POST,
    SET_USER,
    UNSET_USER
} from './actionDefinitions'

import firebase from '../utils/firebaseSetup'

/*export const setupFirebase=(config, firebase)=>({
    type: SET_FIREBASE_CONFIG,
    config
})*/

export const setPosts=(post, key)=>({
    type:SET_POST,
    post,
    key
})

export const setUser=user=>({
    user,
    type:SET_USER
})
export const unSetUser=()=>({
    type:UNSET_USER
})

/**
 * Start listening to changes when the app boots
 */
export const listenToPosts=(dispatch)=>{
    firebase.database().ref('posts').limitToLast(100).on('child_added', snapshot =>{
        console.log(snapshot.val())
        dispatch(setPosts(snapshot.val(), snapshot.key))
    })
}

export const listenToAuth=(dispatch)=>{
    firebase.auth().onAuthStateChanged(user=>{
        console.log(user)
        if(user){
            dispatch(setUser(user))
        }
        else{
            dispatch(unSetUser())
        }
    })
        
}

export const post=(dispatch, user, post) => {
    //console.log(user, post)
    const postRef=firebase.database().ref('posts').push()
    const {displayName, uid, email, photoURL}=user
    const obj={displayName, uid, email, photoURL, timestamp:firebase.database.ServerValue.TIMESTAMP, ...post}
    console.log(obj)
    postRef.set(obj)
}

