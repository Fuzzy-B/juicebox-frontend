import { useState } from "react" 
import axios from "axios"
import { useNavigate, NavLink } from "react-router-dom"



export default function Login({setToken}) {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    let body = {
        username: username,
        password: password
    }
    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const result = await axios.post('http://localhost:3000/api/users/login', body)
            setToken(result.data.token)
            navigate('/posts')
        } catch(err) {
            console.error(err)
            setError( `Login failed, please make sure your email and password are accurate or`)
        }
    }


    return (
        <div className="login" >
            <h1>Login:</h1> 
            <form onSubmit={handleSubmit} className="login" >
                <label>username:</label>
                <input type="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <label>Password:</label> 
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}