import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Logding from "./pages/logding";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logding" element={<Logding />} />

        </Routes>              
      </div>
    </div>
  );
}

export default App;
