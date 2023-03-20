import './index.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
