import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logding from "./pages/logding/logding";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logding/:pageId" element={<Logding />} />
          <Route path="*" element={<Home />} />  
        </Routes>              
      </div>
    </div>
  );
}

export default App;
