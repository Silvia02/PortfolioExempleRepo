import './App.css';
import NavBar from './components/Nav/NavBar';
import Home from './components/Nav/Contents/Home';
import Footer from './components/Nav/Contents/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './components/Nav/Contents/About';
import Skills from './components/Nav/Contents/Skills';
import Projects from "./components/Nav/Contents/Projects";

export default function App() {

  return (
    <Router>
      <>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Footer} />
          <Route path="/About" component={About} />
          <Route path="/Skills" component={Skills} />
        </Switch> */}
      </>
    </Router>
  );
}


