import { useState } from 'react'  

import Login from './components/login'
import Posts from './components/posts'

import { Route, Routes} from 'react-router-dom'

function App() {
  const [token, setToken] = useState(null) 
  return (
    <>
       
      <main>
        <Routes> 
           
          <Route path='/' element={<Login setToken={setToken} />} /> 
             
          <Route path='/posts' element={<Posts />} />
          </Routes>
      </main>

    </>
  )
}

export default App
