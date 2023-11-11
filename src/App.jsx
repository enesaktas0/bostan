import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
