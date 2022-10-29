import React from "react";
import { Box, Typography, FormControl,MenuItem,Select, Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeComment } from "../actions/CommentsAction";

const BottomComponent = ({comments}) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log('e.value',e.target.value)
        dispatch(removeComment(e.target.value))
    }

    return (
        <Box sx={{display:'grid', placeItems:"center"}}>
            <Card>
             <CardContent>
              <Typography variant="h5" component="h5">Delete Comment</Typography>
              <FormControl sx={{width:'200px'}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleChange}
                >
                  <MenuItem selected>Delete Comment</MenuItem>
                  {comments?.map((comment) => {
                      return <MenuItem value={comment.id}>{comment.body}</MenuItem>
                  })}
                </Select>
              </FormControl>
             </CardContent>
           </Card>
        </Box>
    )
}

export default BottomComponent;