import './App.css';
import Header from './components/header'
import Resume from './components/resume'
import SideProjects from './components/side_projects'
import About from './components/about'
import React from 'react';


function App() {
  
  return (
    <div className="App">
        <Header />
        <Resume />
        <SideProjects />

        <About />
        <p>Copyright &copy; 2021</p>
    </div>
  );
}

export default App;

// https://www.nmore.co/