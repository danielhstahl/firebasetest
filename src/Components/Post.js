//@flow
import React from 'react'
//import Card, { CardActions, CardContent , CardMedia, CardHeader} from 'material-ui/Card'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import {PostType} from '../Types/types'
import Avatar from 'material-ui/Avatar'

  
export default /*withStyles(styles)*/({body, postId, photoURL, title, displayName, classes}:{...PostType, classes:Object})=>(
    <ListItem>
        <Avatar alt={displayName} src={photoURL}/>
        <ListItemText primary={title} secondary={body} />
    </ListItem>
)