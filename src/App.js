import { Routes, Route, Router } from "react-router-dom";
import Header from './components/Navbar/Header';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Project from "./pages/Projects/Projects";
import Technologies from "./pages/Technologies/Technologies";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Notfound from "./pages/Notfound/Notfound";
import './app.scss';

function App() {
  return (
    <div className="app">
      <header>
          <Header />
      </header>
      <main>
        <Routes>
              <Route index element={< Home/>}/> 

              <Route path="about" element={ < About/>} />
              <Route path="projects" element={ < Project/>} />
              <Route path="technologies" element={ < Technologies/>} />
              <Route path="skills" element={ < Skills/>} />
              <Route path="contacts" element={ < Contact/>} />
              <Route path="*" element={ < Notfound/>} />
             
        </Routes>
      </main>
     
    </div>
  );
}

export default App;
