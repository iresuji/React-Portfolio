import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Contact />
      <Gallery />
    </div>

  );
}

export default App;
