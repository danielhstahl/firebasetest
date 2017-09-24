//@flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import {User} from '../Types/types'
import Button from 'material-ui/Button'
import withState from 'recompose/withState'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import PropTypes from 'prop-types'
import withProps from 'recompose/withProps'

const enhance=compose(
    withState('title', 'setTitle', ''),
    withState('body', 'setBody', ''),
    withHandlers({
        onTitleChange:({setTitle})=>event=>{
            setTitle(event.target.value)
        },
        onBodyChange:({setBody})=>event=>{
            setBody(event.target.value)
        },
        onFormSubmit:({title, body, onSubmit, user})=>event=>{
            event.preventDefault()
            onSubmit({title, body}, user)
        }
    }),
    withProps({
        onSubmit:PropTypes.func.isRequired,
        user:PropTypes.object.isRequired//this is taken care of by flow
    })
)

const styles = theme => ({
    container: {
      /*display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',*/
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    button:{
        margin:theme.spacing.unit
    },
})
const onSubmitHOC=(onSubmit, firebase, user)=>e=>{
    e.preventDefault()
    console.log(e.target)
    //onSubmit(firebase, e)
}

type Submit=(value:{title:string, body:string})=>void
type TextEvent=(event:{target:{value:string}})=>void

export default enhance(withStyles(styles)(
    ({
        classes, 
        onTitleChange,
        onBodyChange,
        title,
        body,
        onFormSubmit
    })=>(
    <form className={classes.container} noValidate autoComplete="off" onSubmit={onFormSubmit}>
        <TextField
            id="title"
            label="Title"
            value={title}
            onChange={onTitleChange}
            className={classes.textField}
            margin="normal"
        />
        <TextField
            id="body"
            label="Body"
            value={body}
            onChange={onBodyChange}
            className={classes.textField}
            margin="normal"
        />
        <Button raised color="primary" type="submit" className={classes.button}>
        Submit
        </Button>
    </form>
)))