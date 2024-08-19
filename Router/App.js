import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Router/Contact';
import Menu from './Router/Menu';
import Home from './Router/Home';
import About from './Router/About';
import Project from './Router/Project';
function App() {
  return (
    <>
    <Menu/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Project" element={<Project/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
