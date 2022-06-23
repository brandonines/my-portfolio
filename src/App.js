import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar"

function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/posts/:slug' element={<SinglePost/>} />
        <Route path='/posts' element={<Post/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
