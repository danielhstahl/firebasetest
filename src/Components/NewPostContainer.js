//@flow
import NewPost from './NewPost'
import { connect } from 'react-redux'
import {post} from '../Actions/firebase'
const mapStateToProps=({user})=>({
     user
})

const mapDispatchToProps=dispatch=>({
    onSubmit:({title, body},  user)=>{
        post(dispatch, user, {title, body})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
