import { request } from "../CustomHooks/useFetch";

export const getAllComments = () => async (dispatch) => {
  const data = await request("GET", "http://localhost:3000/comments");
  dispatch({ type: "GET_ALL_COMMENT", payload: data });
};

export const addComment = (body) => async (dispatch) => {
  const data = await request("POST", "http://localhost:3000/comments", body);
  dispatch({ type: "ADD_COMMENT", payload: data });
};

export const removeComment = (id) => async (dispatch) => {
  const data = await request("DELETE", `http://localhost:3000/comments/${id}`);
  dispatch({ type: "REMOVE_COMMENT",payload:id});
};

export const updateComment = (id, body) => async (dispatch) => {
  const data = await request("PUT", `http://localhost:3000/comments/${id}`, body);
  dispatch({ type: "UPDATE_COMMENT", payload: {data:data,id:id} });
};
export const getComment = (id) => async (dispatch) => {
  const data = await request("GET", `http://localhost:3000/comments/${id}`);
  dispatch({ type: "GET_COMMENT",payload:data});
};

//for TopComponent
export const getCommentById = (id) => async (dispatch) => {
  const data = await request("GET", `http://localhost:3000/comments/${id}`);
  dispatch({ type: "GET_COMMENT_BY_ID",payload:data});
};
