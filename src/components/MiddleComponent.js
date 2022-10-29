import { Box,TextField,Card,CardActions,CardContent,Typography,Button } from "@mui/material";
import React,{useState} from "react";
import { addComment } from "../actions/CommentsAction";
import { useDispatch } from "react-redux";

const MiddleComponent = (props) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addComment({id: Math.floor(Math.random() * Date.now()) ,body: comment}))
        console.log('comment',comment)

    }
    return (
        <Box sx={{display:'grid', placeItems:"center",padding:"100px 0px", backgroundColor:"blanchedalmond"}}>
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Typography
                  variant='h6'
                  component='div'
                  align='center'
                  gutterBottom
                >
                  Create Comment
                </Typography>
                <TextField
                  fullWidth
                  id='comment'
                  name='comment'
                  label='Comment'
                  size='small'
                  variant='outlined'
                  margin='dense'
                  gutterBottom
                  value={comment}
                  onChange={(e) => {setComment(e.target.value)}}
                />
              </CardContent>
              <CardActions sx={{display: "flex", flexDirection: "row-reverse"}}>
                <Button
                  variant='contained'
                  size='small'
                  type='submit'
                >
                    Add
                </Button>
              </CardActions>
            </Card>
          </form>
        </Box>
    )
}

export default MiddleComponent;