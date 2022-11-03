import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, FormControl,MenuItem,Select, Card, CardContent, TextField, CardActions, Button } from "@mui/material";
import { updateComment, getCommentById } from "../actions/CommentsAction";

const TopComponent = ({comments}) => {
    const dispatch = useDispatch()
    const selectedComment = useSelector((state) => state?.allComments?.commentById);

    const [selectedId, setSelectedId] = useState("")
    const [comment, setComment] = useState(selectedComment?.body)

    useEffect(() => {
        if (selectedComment?.body) {
          setComment(selectedComment?.body);
        }
      }, [selectedComment]);
    
    const handleChange = (e) => {
        setSelectedId(e.target.value)
        dispatch(getCommentById(e.target.value))
        console.log('e.value',e.target.value)   
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateComment(selectedId, {body: comment}))
    }

    return (
        <Box sx={{display:'grid', placeItems:"center",marginBottom:"20px"}}>
        <Card>
         <CardContent>
          <Typography variant="h5" component="h5">Edit Comment</Typography>
          <FormControl sx={{width:'200px'}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
            >
              {comments?.map((comment) => {
                return <MenuItem value={comment?.id}>{comment?.body}</MenuItem>
              })}
            </Select>
          </FormControl>

          {selectedId && 
            <div>
                <form onSubmit={handleSubmit}>
                  <Card>
                    <CardContent>
                      <Typography
                        variant='h6'
                        component='div'
                        align='center'
                        gutterBottom
                      >
                        Edit Comment
                      </Typography>
                      <TextField
                        fullWidth
                        id='comment'
                        name='comment'
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
                          Edit
                      </Button>
                    </CardActions>
                  </Card>
                </form>
            </div>}
         </CardContent>
       </Card>
    </Box>
    )
}

export default TopComponent;