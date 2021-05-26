import './styles/App.css';
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'


function App() {



  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
