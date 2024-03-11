import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Posts() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        async function updatePosts(){
            try {
                const response = await axios.get('http://localhost:3000/api/posts')
                setPosts(response.data.posts)
            } catch(err) {
                console.error(err)
            }
        }
        updatePosts() 
    }, [])  
    console.log(posts)

    if(!posts[0]) {
        return <h1>loading...</h1>
    }

    return (
        <>
            {
                posts.map((post)=> {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <h4>Posted by: {post.author.username}</h4>
                            <p>{post.content}</p> 
                            <h4>Tags:</h4>
                            <ul>
                                {post.tags.map((tag, index) => (
                                    <li key={index}>{tag.name}</li>
                                ))}
                            </ul>
                        </article>
                    )
                })
            }
        </>
    )
 
}