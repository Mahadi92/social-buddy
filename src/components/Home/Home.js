import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

export const PostsContext = createContext()
const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <PostsContext.Provider values={posts, setPosts}>
            <Header></Header>
            <div className="row">
                {
                    posts.map(post => <Posts post={post}></Posts>)
                }
            </div>

        </PostsContext.Provider>
    );
};

export default Home;