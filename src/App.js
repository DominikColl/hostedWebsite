import React from 'react';
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './pages/nav'
import Footer from './pages/footer'
import './styles.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='appp' >
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
