import './App.css';
import { React } from './imports.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import { CarouselContainer, AboutMe, MainPage } from './components/index';
import Typical from 'react-typical';

function App() {

  return (
    <div className="App">
        <MainPage />
        <h1 className="projects-title" id="side-projects-title-id">Side projects I've worked on</h1>
        <CarouselContainer className="carousel-container" id="carousel" /> 
        <AboutMe />
        <p className="text">Copyright &copy; 2021</p>
    </div>
  );
}

export default App;
