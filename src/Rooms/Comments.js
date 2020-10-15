import React, { useState } from 'react'
import { Button, Input} from '@material-ui/core';
import axios from './axios';
import SingleComment from './SingleComment';

function Comments(props) {

 
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.target.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

       
        const writer=localStorage.getItem('uid')
        if (!writer){
            return alert('Please Log in first');
        }
        const variables = {
            content: Comment,
            postId: props.postId,
            writer:writer,
        }
       
        
        console.log(variables)

        axios.post('/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setComment("")
                    console.log(response.data.result)
                    props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

    return (
        <div>
            <br />
            <div> Share your opinions about {props.movieTitle} </div>
            <hr />
            {/* Comment Lists  */}
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <>
                         <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} /> 
            
                    </>
                )
            ))}

            {props.CommentLists && props.CommentLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px'}} >
                    Be the first one who shares your thought about this movie
                </div>
            }

            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <input
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Comments
