
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import Category from './Component/Category/Category'
import JobList from './Component/JobList/JobList'

function App() {


  return (
    <div className="App lg:mx-32">
       <Header></Header>
        
       <Outlet></Outlet>
       {/* <Category></Category>
       <JobList></JobList> */}
       
    </div>
  )
}

export default App
