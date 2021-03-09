import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Posts = (props) => {
    const { id, title, body } = props.post
    return (
        <div className="col-4">
            <div className="card border-primary ms-3 mt-3">
                <div className="card-header">Post no. {id}</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link to={'/post/' + id}><button className="btn btn-primary">See comments</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Posts;