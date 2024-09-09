import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Travels from './Travels.js';


function App() {





  return (
<>


      <Router>
            <Navbar />  {/* This will be displayed on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/travels" element={<Travels />} />
            </Routes>
        </Router>


</>


  );
}

export default App;
