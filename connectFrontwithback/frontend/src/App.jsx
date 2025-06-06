import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
        setJokes(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  })

  return (
    <>
    <h1>Chai and full stack</h1>
    <p>Jokes:  {jokes.length}</p>
    {
      jokes.map((joke,ind)=>{
        
        return <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>

      })
    }
    </>
  )
}

export default App
