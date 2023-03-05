import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Gallery from './pages/Gallery';





function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Gallery /> */}
    </Router>


  );
}

export default App;
