import './styles/App.css';
import About from './About'

function App() {



  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-left">
          <h2 className="top-left-name">Dawud S Rehan</h2>
        </div>
        <div className="header-right">
          <button className="about-button nav-button">About</button>
          <button className="projects-button nav-button">Projects</button>
          <button className="resume-button nav-button">Resume</button>
          <button className="contact-button nav-button">Contact</button>

        </div>

      </div>
      <div className="secondary-container">
        <About />
      </div>

    </div>
  );
}

export default App;
