import Intro from "./components/intro/Intro";
import About from './components/about/about';
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

const App = () => {
  return (
    <div className="gradient-background">
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
};

export default App;