//@flow
import React from 'react'
//import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import List, {ListItem, ListItemText} from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import Post from './Post'
import type {PostType} from '../Types/types'

const styles = theme => ({
    container: {
      /*display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',*/
    }
})
 
export default withStyles(styles)(({posts, classes}:{posts:Array<PostType>, classes:Object})=>(
    <List className={classes.container}>
        {posts.map(post=>(
            <Post {...post} key={post.postId}/>
        ))}
    </List>
))
/*
".validate": "newData.hasChildren(['title', 'body', 'uid', 'displayName', 'timestamp']) && newData.child('title').isString() && newData.child('body').isString() && newData.child('timestamp').isNumber() && newData.child('uid').val() == auth.uid",
".indexOn": ["timestamp"] */