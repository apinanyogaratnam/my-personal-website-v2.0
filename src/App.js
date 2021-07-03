import './App.css';
import { React, Typical, Container, RiArrowDownSLine, Link } from './imports.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import { CarouselContainer, Header, Resume, SideProjects, About, AboutMe, MainPage } from './components/index';

function App() {

  return (
    <div className="App">
        {/* <Header /> */}
        <MainPage />
        <CarouselContainer className="carousel-container" id="carousel" /> 
        <AboutMe />
        {/* <About /> */}
        {/* <p className="text">Copyright &copy; 2021</p> */}
    </div>
  );
}

export default App;
