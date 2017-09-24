import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import PostsContainer from './Components/PostsContainer'
import NewPostContainer from './Components/NewPostContainer'
import firebase from 'firebase'
import {listenToAuth, listenToPosts} from './Actions/firebase'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    margin:50
    /*display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',*/
  }
})

const App=withStyles(styles)(({classes})=>(
<Grid container className={classes.container}>
  <Grid item xs={12}>
    <PostsContainer/>
  </Grid>
  <Grid item xs={12}>
    <NewPostContainer/>
  </Grid>
</Grid>
))
//set listeners on load
const mapDispatchToProps=dispatch=>{
  listenToAuth(dispatch)
  listenToPosts(dispatch)
  return {}
}
const mapStateToProps=(state, userProps)=>({
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
