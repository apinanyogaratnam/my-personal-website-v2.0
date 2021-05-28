import './App.css';
import Header from './components/header'
import Resume from './components/resume'
import SideProjects from './components/side_projects'
import React from 'react';


function App() {
  
  return (
    <div className="App">
        <Header />
        <Resume />
        <SideProjects />
    </div>
  );
}

export default App;
