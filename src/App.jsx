
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'

function App() {


  return (
    <div className="App mx-32">
       <Header></Header>
       <Hero></Hero>
       
    </div>
  )
}

export default App
