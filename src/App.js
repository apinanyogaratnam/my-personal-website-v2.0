import './App.css';
import { React, Typical, Container, RiArrowDownSLine, Link } from './imports.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import { CarouselContainer, Header, Resume, SideProjects, About, AboutMe } from './components/index';

function App() {

  return (
    <div className="App">
        {/* <Header /> */}
        <Container className="text">
          <figure className="position-relative">
            <img className="circular-image img-fluid" src={require("./images/circular_loops.jpg")} alt="Background Image of a Circular Loops" />
            <figcaption>
                    <h1>Hi, I'm Apinan Yogaratnam</h1>
                    <p className="text">I'm a{' '}
                      
                      <Typical 
                      // loop={Infinity} 
                      loop={1}
                      wrapper="b" 
                      steps={[
                        'Software Developer 💻', 1000,
                        'Student at the University of Toronto 🏫', 1000,
                        'McDonald\'s Employee 🍔', 1000,
                        'Software Engineer 👨🏾‍💻', 1000
                      ]}/>

                    </p>
            </figcaption>
          </figure>
        
        {/* <Resume /> */}
        {/* <SideProjects /> */}
        <br />
        <br />
        <br />
 
        <Link to="carousel"> <RiArrowDownSLine color="white" size="2em" /> </Link> 

        <br /><br /><br />
        </Container>
        <CarouselContainer className="carousel-container" id="carousel" /> 
        <AboutMe />
        {/* <About /> */}
        {/* <p className="text">Copyright &copy; 2021</p> */}
    </div>
  );
}

export default App;
