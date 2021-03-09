import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Comments = () => {
    const { id } = useParams()

    const [post, setPost] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log(err))
    }, [id])
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>
            <div className="card border-primary ms-3 mt-3">
                <div className="card-header">Post no. {post.id}</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
            <p></p>
            {
                comments.map(comment => {
                    return (
                        <div className="card m-3 w-50">
                            <div className="card-header">
                                <b>Name: {comment.name} </b>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">{comment.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Comments;