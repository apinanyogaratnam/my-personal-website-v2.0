import './App.css';
import { React } from './imports.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import { CarouselContainer, AboutMe, MainPage, Socials, SideProjectsSection } from './components/index';

function App() {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="App">
        <MainPage />
        <CarouselContainer className="carousel-container" id="carousel" /> 
        <SideProjectsSection />
        <AboutMe />
        <hr />
        <Socials />
        <p className="text">Copyright &copy; {currentYear}</p>
    </div>
  );
}

export default App;
