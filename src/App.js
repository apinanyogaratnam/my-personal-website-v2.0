import './App.css';
import Header from './components/header'
import Resume from './components/resume'
import SideProjects from './components/side_projects'
import About from './components/about'
import AboutMe from './components/about_me'
import React from 'react';
import Typical from 'react-typical'


function App() {
  
  return (
    <div className="App">
        {/* <Header /> */}
        <div className="content-wrapper">
          <img className="circular-image" src="/images/circular_loops.jpg" alt="Background Image of a Circular Loops" />
          <div className="text-wrapper"></div>
          <h1>Hi, I'm Apinan Yogaratnam</h1>
          <p>I'm a{' '}
            
            <Typical 
            loop={Infinity} 
            wrapper="b" 
            steps={[
              'Software Developer', 1000,
              'Student at the University of Toronto', 1000,
              'McDonald\'s Employee', 1000,
            ]}/>

          </p>
        </div>
        {/* <Resume /> */}
        {/* <SideProjects /> */}
        <br />
        <br />
        <br />
        <br />
        <AboutMe />
        <About />
        <p>Copyright &copy; 2021</p>
    </div>
  );
}

export default App;

// https://www.nmore.co/