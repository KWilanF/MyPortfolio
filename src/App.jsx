import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Workout from "./pages/Workout";
import NotfoundPage from "./pages/NotfoundPage";
import KeepAlive from './components/KeepAlive';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/workouts" element={<Workout />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
    
  )
}

export default App;