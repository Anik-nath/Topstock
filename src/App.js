import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Navigations from "./Components/Shared/Navigations/Navigations";
import Footer from "./Components/Shared/Footer/Footer";
import Shop from "./Components/Pages/Shop/Shop";
import Contact from "./Components/Pages/Contact/Contact";
import Faq from "./Components/Pages/Faq/Faq";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigations></Navigations>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/faq" element={<Faq></Faq>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
