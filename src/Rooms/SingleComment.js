// import React, { useState } from 'react'
// import { Comment, Avatar, Button, Input } from 'antd';
// import axios from 'axios';

// const { TextArea } = Input;

// function SingleComment(props) {
   
//     const [CommentValue, setCommentValue] = useState("")
//     const [OpenReply, setOpenReply] = useState(false)

//     const handleChange = (e) => {
//         setCommentValue(e.currentTarget.value)
//     }
//     console.log(props)
//     const openReply = () => {
//         setOpenReply(!OpenReply)
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const variables = {
//             writer:  window.localStorage.getItem('userId'),
//             postId: props.postId,
//             responseTo: props.comment._id,
//             content: CommentValue
//         }


//         axios.post('/saveComment', variables)
//             .then(response => {
//                 if (response.data.success) {
//                     setCommentValue("")
//                     setOpenReply(!OpenReply)
//                     props.refreshFunction(response.data.result)
//                 } else {
//                     alert('Failed to save Comment')
//                 }
//             })
//     }

//     // const actions = [
//     //     <LikeDislikes comment commentId={props.comment._id} userId={localStorage.getItem('userId')} />,
//     //     <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
//     // ]

//     const [x]=props.comment
   
//     return (
//         <div>
//             <Comment
//                 // actions={actions}
//                 // author={props.comment.writer.name}
//                 // avatar={
//                 //     <Avatar
//                 //         src={props.comment.writer.image}
//                 //         alt="image"
//                 //     />
//                 // }
//                 content={
//                     <p>
//                         {x.content}
//                     </p>
//                 }
//             ></Comment>


//             {OpenReply &&
//                 <form style={{ display: 'flex' }} onSubmit={onSubmit}>
//                     <TextArea
//                         style={{ width: '100%', borderRadius: '5px' }}
//                         onChange={handleChange}
//                         value={CommentValue}
//                         placeholder="write some comments"
//                     />
//                     <br />
//                     <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
//                 </form>
//             }

//         </div>
//     )
// }

// export default SingleComment
