//@flow
import Posts from './Posts'
import { connect } from 'react-redux'
const mapStateToProps=({posts})=>({posts})

export default connect(mapStateToProps)(Posts)