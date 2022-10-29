import React from "react";
import { Typography,Box } from "@mui/material";

const RightSideComponent = ({comments}) => {
    return (
        <Box sx={{display:'grid', placeItems:"center"}}>
          <Typography component="h5" variant="h5">List All Comments</Typography>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        </Box>
    )
}

export default RightSideComponent;