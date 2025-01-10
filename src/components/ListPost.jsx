import { useEffect, useState } from "react"
import Post from "./Post"
import axios from "axios"

const ListPost = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     const fetchPosts = async() => {
    //         const url = 'https://jsonplaceholder.typicode.com/posts';
    //         const res = await fetch(url);
    //         const posts = await res.json();
    //         setPosts(posts)
    //     }
    //     fetchPosts()
    // }, [])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])

    return posts.map(post => <Post key={post.id} post={post} />)
}
export default ListPost