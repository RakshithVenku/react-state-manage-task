import React,{useState, useEffect} from "react";
import axios from "axios";

const SampleForm = () => {
    const [name, setName] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/comments")
             .then((response) => {
                console.log('response-->',response.data)
                setComments(response.data)
             })
             .catch((err) => {
                console.log('err-->',err)
             })
             
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('name-->',name)
        axios.post("http://localhost:3000/comments", { "id": (Math.random()*10), "body": name, "postId": (Math.random()*10) })
             .then((response) => {
                console.log('response-->',response.data)
             })
             .catch((err) => {
                console.log('err-->',err)
             })

        setName('')
    }

    const handleChange = (e) => {
        axios.delete(`http://localhost:3000/comments/${e.target.value}`)
        .then((response) => {
           console.log('deleted-->',response.data)
           
        })
        .catch((err) => {
           console.log('err-->',err)
        })
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                <input type="submit" name="Submit" />
            </form>

            <select>
                {comments?.map((comment) => {
                    return (
                        <option key={comment.id}>{comment.body}</option>
                    )
                })}
            </select>

            <select onChange={handleChange}>
                {comments?.map((comment) => {
                    return (
                        <option value={comment.id} key={comment.id}>{comment.body}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SampleForm;