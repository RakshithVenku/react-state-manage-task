import React from "react";
import { Box, Typography, FormControl,MenuItem,Select, Card, CardContent } from "@mui/material";
import { getComment } from "../actions/CommentsAction";
import { useDispatch, useSelector } from "react-redux";

const LeftSideComponent = ({comments}) => {
    const selectedComment = useSelector((state) => state?.allComments?.comment);
    const dispatch = useDispatch()


    const handleChange = (e) => {
        console.log('e.value',e.target.value)
        dispatch(getComment(e.target.value));
    }

    return (
        <Box sx={{display:'grid', placeItems:"center"}}>
        <Card>
         <CardContent>
          <Typography variant="h5" component="h5">Select A Comment</Typography>
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

          {selectedComment?.body && <div>
            <Typography>id : {selectedComment?.id}</Typography>
            <Typography>body : {selectedComment?.body}</Typography>
            </div>}
         </CardContent>
       </Card>
    </Box>
    )
}

export default LeftSideComponent;