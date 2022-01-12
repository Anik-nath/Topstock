import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Navigations from "./Components/Shared/Navigations/Navigations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigations></Navigations>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
