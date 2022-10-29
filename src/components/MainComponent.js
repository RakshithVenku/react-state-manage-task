import React from "react";
import { Box, Grid } from "@mui/material";
import TopComponent from "./TopComponent"
import LeftSideComponent from "./LeftSideComponent"
import MiddleComponent from "./MiddleComponent"
import RightSideComponent from "./RightSideComponent"
import BottomComponent from "./BottomComponent"
import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {getAllComments} from '../actions/CommentsAction'


const MainComponent = (props) => {
    const dispatch = useDispatch()
    const comments= useSelector(state=>state.allComments.comments)
    useEffect(() => {
     dispatch(getAllComments())
    }, [dispatch]);
   console.log(comments)
    return (
        <Box>
            <Grid container>
                <Grid item xl={12} lg={12} md={12}>
                    <TopComponent comments={comments} />
                </Grid>
                <Grid item xl={4} lg={4} md={4}>
                    <LeftSideComponent comments={comments}  />
                </Grid>
                <Grid item xl={4} lg={4} md={4}>
                    <MiddleComponent comments={comments}  />
                </Grid>
                <Grid item xl={4} lg={4} md={4}>
                    <RightSideComponent comments={comments}  />
                </Grid>
                <Grid item xl={12} lg={12} md={12}>
                    <BottomComponent comments={comments}  />
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainComponent;