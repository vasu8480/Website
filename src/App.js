import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Certification from "./components/Certifications/Certification";
import Header from "./components/Header";
import Slider from "./components/Slider";
import image from "./components/Certifications/back2.png"


function App() {
  return (
    <div /*style={{ backgroundImage: `url(${image})` }}*/>
      <BrowserRouter>
        <Header />
        <Slider />
        <Certification />
      </BrowserRouter>
    </div>
  );
}

export default App;
