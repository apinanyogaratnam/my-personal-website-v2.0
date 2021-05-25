import './App.css';
import Header from './components/header'
import Resume from './components/resume'
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header />
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="apinan-yogaratnam-827177185" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/apinan-yogaratnam-827177185?trk=profile-badge">Apinan Yogaratnam</a></div>
      <Resume />
    </div>
  );
}

export default App;
